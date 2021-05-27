"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/job-frameworks`, require('./jobFrameworksCreate').default);
    app.put(`/tenant/:tenantId/job-frameworks/:id`, require('./jobFrameworksUpdate').default);
    app.post(`/tenant/:tenantId/job-frameworks/import`, require('./jobFrameworksImport').default);
    app.delete(`/tenant/:tenantId/job-frameworks`, require('./jobFrameworksDestroy').default);
    app.get(`/tenant/:tenantId/job-frameworks/autocomplete`, require('./jobFrameworksAutocomplete').default);
    app.get(`/tenant/:tenantId/job-frameworks`, require('./jobFrameworksList').default);
    app.get(`/tenant/:tenantId/job-frameworks/:id`, require('./jobFrameworksFind').default);
};
//# sourceMappingURL=index.js.map