"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/plan/stripe/webhook`, require('./stripe/webhook').default);
    app.post(`/tenant/:tenantId/plan/stripe/portal`, require('./stripe/portal').default);
    app.post(`/tenant/:tenantId/plan/stripe/checkout`, require('./stripe/checkout').default);
};
//# sourceMappingURL=index.js.map