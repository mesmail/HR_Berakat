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
const lodash_1 = __importDefault(require("lodash"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stripe = require('stripe')(config_1.getConfig().PLAN_STRIPE_SECRET_KEY);
        const event = stripe.webhooks.constructEvent(req.rawBody, req.headers['stripe-signature'], config_1.getConfig().PLAN_STRIPE_WEBHOOK_SIGNING_SECRET);
        if (event.type === 'checkout.session.completed') {
            let data = event.data.object;
            data = yield stripe.checkout.sessions.retrieve(data.id, { expand: ['line_items'] });
            const stripePriceId = lodash_1.default.get(data, 'line_items.data[0].price.id');
            if (!stripePriceId) {
                throw new Error('line_items.data[0].price.id NULL!');
            }
            const plan = plans_1.default.selectPlanByStripePriceId(stripePriceId);
            const planStripeCustomerId = data.customer;
            yield new tenantService_1.default(req).updatePlanStatus(planStripeCustomerId, plan, 'active');
        }
        if (event.type === 'customer.subscription.updated') {
            const data = event.data.object;
            const stripePriceId = lodash_1.default.get(data, 'items.data[0].price.id');
            const plan = plans_1.default.selectPlanByStripePriceId(stripePriceId);
            const planStripeCustomerId = data.customer;
            if (plans_1.default.selectPlanStatus(data) === 'canceled') {
                yield new tenantService_1.default(req).updatePlanToFree(planStripeCustomerId);
            }
            else {
                yield new tenantService_1.default(req).updatePlanStatus(planStripeCustomerId, plan, plans_1.default.selectPlanStatus(data));
            }
        }
        if (event.type === 'customer.subscription.deleted') {
            const data = event.data.object;
            const planStripeCustomerId = data.customer;
            yield new tenantService_1.default(req).updatePlanToFree(planStripeCustomerId);
        }
        return apiResponseHandler_1.default.success(req, res, {
            received: true,
        });
    }
    catch (error) {
        return apiResponseHandler_1.default.error(req, res, error);
    }
});
//# sourceMappingURL=webhook.js.map