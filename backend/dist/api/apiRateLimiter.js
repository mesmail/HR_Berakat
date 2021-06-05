"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// import MongoStore from 'rate-limit-mongo';
// import { getConfig } from '../config';
function createRateLimiter({ max, windowMs, message, }) {
    return new express_rate_limit_1.default({
        // store: new MongoStore({
        //   uri: getConfig().DATABASE_CONNECTION,
        // }),
        max,
        windowMs,
        message,
    });
}
exports.createRateLimiter = createRateLimiter;
//# sourceMappingURL=apiRateLimiter.js.map