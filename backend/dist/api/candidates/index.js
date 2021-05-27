"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/candidates`, require('./candidatesCreate').default);
    app.put(`/tenant/:tenantId/candidates/:id`, require('./candidatesUpdate').default);
    app.post(`/tenant/:tenantId/candidates/import`, require('./candidatesImport').default);
    app.delete(`/tenant/:tenantId/candidates`, require('./candidatesDestroy').default);
    app.get(`/tenant/:tenantId/candidates/autocomplete`, require('./candidatesAutocomplete').default);
    app.get(`/tenant/:tenantId/candidates`, require('./candidatesList').default);
    app.get(`/tenant/:tenantId/candidates/:id`, require('./candidatesFind').default);
};
//# sourceMappingURL=index.js.map