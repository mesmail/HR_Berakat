"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/claim`, require('./claimCreate').default);
    app.put(`/tenant/:tenantId/claim/:id`, require('./claimUpdate').default);
    app.post(`/tenant/:tenantId/claim/import`, require('./claimImport').default);
    app.delete(`/tenant/:tenantId/claim`, require('./claimDestroy').default);
    app.get(`/tenant/:tenantId/claim/autocomplete`, require('./claimAutocomplete').default);
    app.get(`/tenant/:tenantId/claim`, require('./claimList').default);
    app.get(`/tenant/:tenantId/claim/:id`, require('./claimFind').default);
};
//# sourceMappingURL=index.js.map