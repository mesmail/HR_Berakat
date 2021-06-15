"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/job-requirments`, require('./jobRequirmentsCreate').default);
    app.put(`/tenant/:tenantId/job-requirments/:id`, require('./jobRequirmentsUpdate').default);
    app.post(`/tenant/:tenantId/job-requirments/import`, require('./jobRequirmentsImport').default);
    app.delete(`/tenant/:tenantId/job-requirments`, require('./jobRequirmentsDestroy').default);
    app.get(`/tenant/:tenantId/job-requirments/autocomplete`, require('./jobRequirmentsAutocomplete').default);
    app.get(`/tenant/:tenantId/job-requirments`, require('./jobRequirmentsList').default);
    app.get(`/tenant/:tenantId/job-requirments/:id`, require('./jobRequirmentsFind').default);
};
//# sourceMappingURL=index.js.map