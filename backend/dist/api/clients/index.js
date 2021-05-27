"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/clients`, require('./clientsCreate').default);
    app.put(`/tenant/:tenantId/clients/:id`, require('./clientsUpdate').default);
    app.post(`/tenant/:tenantId/clients/import`, require('./clientsImport').default);
    app.delete(`/tenant/:tenantId/clients`, require('./clientsDestroy').default);
    app.get(`/tenant/:tenantId/clients/autocomplete`, require('./clientsAutocomplete').default);
    app.get(`/tenant/:tenantId/clients`, require('./clientsList').default);
    app.get(`/tenant/:tenantId/clients/:id`, require('./clientsFind').default);
};
//# sourceMappingURL=index.js.map