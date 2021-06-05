"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const tenantService_1 = __importDefault(require("../../../services/tenantService"));
const plans_1 = __importDefault(require("../../../security/plans"));
const apiResponseHandler_1 = __importDefault(require("../../apiResponseHandler"));
const Error403_1 = __importDefault(require("../../../errors/Error403"));
const Error400_1 = __importDefault(require("../../../errors/Error400"));
const tenantSubdomain_1 = require("../../../services/tenantSubdomain");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!config_1.getConfig().PLAN_STRIPE_SECRET_KEY) {
            throw new Error400_1.default(req.language, 'tenant.stripeNotConfigured');
        }
        const stripe = require('stripe')(config_1.getConfig().PLAN_STRIPE_SECRET_KEY);
        const currentTenant = req.currentTenant;
        const currentUser = req.currentUser;
        if (!currentTenant || !currentUser) {
            throw new Error403_1.default(req.language);
        }
        if (currentTenant.plan !== plans_1.default.values.free &&
            currentTenant.planStatus !== 'cancel_at_period_end' &&
            currentTenant.planUserId !== currentUser.id) {
            throw new Error403_1.default(req.language);
        }
        let planStripeCustomerId = currentTenant.planStripeCustomerId;
        if (!planStripeCustomerId ||
            currentTenant.planUserId !== currentUser.id) {
            const stripeCustomer = yield stripe.customers.create({
                email: currentUser.email,
                metadata: {
                    tenantId: currentTenant.id,
                },
            });
            planStripeCustomerId = stripeCustomer.id;
        }
        yield new tenantService_1.default(req).updatePlanUser(currentTenant.id, planStripeCustomerId, currentUser.id);
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: plans_1.default.selectStripePriceIdByPlan(req.body.plan),
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${tenantSubdomain_1.tenantSubdomain.frontendUrl(currentTenant)}/plan`,
            cancel_url: `${tenantSubdomain_1.tenantSubdomain.frontendUrl(currentTenant)}/plan`,
            customer: planStripeCustomerId,
        });
        return apiResponseHandler_1.default.success(req, res, session);
    }
    catch (error) {
        return apiResponseHandler_1.default.error(req, res, error);
    }
});
//# sourceMappingURL=checkout.js.map