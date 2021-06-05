"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/employment-contract`, require('./employmentContractCreate').default);
    app.put(`/tenant/:tenantId/employment-contract/:id`, require('./employmentContractUpdate').default);
    app.post(`/tenant/:tenantId/employment-contract/import`, require('./employmentContractImport').default);
    app.delete(`/tenant/:tenantId/employment-contract`, require('./employmentContractDestroy').default);
    app.get(`/tenant/:tenantId/employment-contract/autocomplete`, require('./employmentContractAutocomplete').default);
    app.get(`/tenant/:tenantId/employment-contract`, require('./employmentContractList').default);
    app.get(`/tenant/:tenantId/employment-contract/:id`, require('./employmentContractFind').default);
};
//# sourceMappingURL=index.js.map