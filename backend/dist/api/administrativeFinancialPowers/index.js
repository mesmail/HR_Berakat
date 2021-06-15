"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/administrative-financial-powers`, require('./administrativeFinancialPowersCreate').default);
    app.put(`/tenant/:tenantId/administrative-financial-powers/:id`, require('./administrativeFinancialPowersUpdate').default);
    app.post(`/tenant/:tenantId/administrative-financial-powers/import`, require('./administrativeFinancialPowersImport').default);
    app.delete(`/tenant/:tenantId/administrative-financial-powers`, require('./administrativeFinancialPowersDestroy').default);
    app.get(`/tenant/:tenantId/administrative-financial-powers/autocomplete`, require('./administrativeFinancialPowersAutocomplete').default);
    app.get(`/tenant/:tenantId/administrative-financial-powers`, require('./administrativeFinancialPowersList').default);
    app.get(`/tenant/:tenantId/administrative-financial-powers/:id`, require('./administrativeFinancialPowersFind').default);
};
//# sourceMappingURL=index.js.map