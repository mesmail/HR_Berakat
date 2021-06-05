"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/departments`, require('./departmentsCreate').default);
    app.put(`/tenant/:tenantId/departments/:id`, require('./departmentsUpdate').default);
    app.post(`/tenant/:tenantId/departments/import`, require('./departmentsImport').default);
    app.delete(`/tenant/:tenantId/departments`, require('./departmentsDestroy').default);
    app.get(`/tenant/:tenantId/departments/autocomplete`, require('./departmentsAutocomplete').default);
    app.get(`/tenant/:tenantId/departments`, require('./departmentsList').default);
    app.get(`/tenant/:tenantId/departments/:id`, require('./departmentsFind').default);
};
//# sourceMappingURL=index.js.map