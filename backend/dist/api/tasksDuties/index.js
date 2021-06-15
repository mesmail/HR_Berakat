"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/tasks-duties`, require('./tasksDutiesCreate').default);
    app.put(`/tenant/:tenantId/tasks-duties/:id`, require('./tasksDutiesUpdate').default);
    app.post(`/tenant/:tenantId/tasks-duties/import`, require('./tasksDutiesImport').default);
    app.delete(`/tenant/:tenantId/tasks-duties`, require('./tasksDutiesDestroy').default);
    app.get(`/tenant/:tenantId/tasks-duties/autocomplete`, require('./tasksDutiesAutocomplete').default);
    app.get(`/tenant/:tenantId/tasks-duties`, require('./tasksDutiesList').default);
    app.get(`/tenant/:tenantId/tasks-duties/:id`, require('./tasksDutiesFind').default);
};
//# sourceMappingURL=index.js.map