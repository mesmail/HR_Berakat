"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/jobs`, require('./jobsCreate').default);
    app.put(`/tenant/:tenantId/jobs/:id`, require('./jobsUpdate').default);
    app.post(`/tenant/:tenantId/jobs/import`, require('./jobsImport').default);
    app.delete(`/tenant/:tenantId/jobs`, require('./jobsDestroy').default);
    app.get(`/tenant/:tenantId/jobs/autocomplete`, require('./jobsAutocomplete').default);
    app.get(`/tenant/:tenantId/jobs`, require('./jobsList').default);
    app.get(`/tenant/:tenantId/jobs/:id`, require('./jobsFind').default);
};
//# sourceMappingURL=index.js.map