"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/job-path`, require('./jobPathCreate').default);
    app.put(`/tenant/:tenantId/job-path/:id`, require('./jobPathUpdate').default);
    app.post(`/tenant/:tenantId/job-path/import`, require('./jobPathImport').default);
    app.delete(`/tenant/:tenantId/job-path`, require('./jobPathDestroy').default);
    app.get(`/tenant/:tenantId/job-path/autocomplete`, require('./jobPathAutocomplete').default);
    app.get(`/tenant/:tenantId/job-path`, require('./jobPathList').default);
    app.get(`/tenant/:tenantId/job-path/:id`, require('./jobPathFind').default);
};
//# sourceMappingURL=index.js.map