"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/advanced-payment`, require('./advancedPaymentCreate').default);
    app.put(`/tenant/:tenantId/advanced-payment/:id`, require('./advancedPaymentUpdate').default);
    app.post(`/tenant/:tenantId/advanced-payment/import`, require('./advancedPaymentImport').default);
    app.delete(`/tenant/:tenantId/advanced-payment`, require('./advancedPaymentDestroy').default);
    app.get(`/tenant/:tenantId/advanced-payment/autocomplete`, require('./advancedPaymentAutocomplete').default);
    app.get(`/tenant/:tenantId/advanced-payment`, require('./advancedPaymentList').default);
    app.get(`/tenant/:tenantId/advanced-payment/:id`, require('./advancedPaymentFind').default);
};
//# sourceMappingURL=index.js.map