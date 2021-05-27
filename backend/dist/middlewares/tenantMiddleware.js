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
exports.tenantMiddleware = void 0;
const tenantService_1 = __importDefault(require("../services/tenantService"));
function tenantMiddleware(req, res, next, value, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tenant = yield new tenantService_1.default(req).findById(value);
            req.currentTenant = tenant;
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.tenantMiddleware = tenantMiddleware;
//# sourceMappingURL=tenantMiddleware.js.map