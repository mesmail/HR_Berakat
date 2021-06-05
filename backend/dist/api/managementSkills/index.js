"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/management-skills`, require('./managementSkillsCreate').default);
    app.put(`/tenant/:tenantId/management-skills/:id`, require('./managementSkillsUpdate').default);
    app.post(`/tenant/:tenantId/management-skills/import`, require('./managementSkillsImport').default);
    app.delete(`/tenant/:tenantId/management-skills`, require('./managementSkillsDestroy').default);
    app.get(`/tenant/:tenantId/management-skills/autocomplete`, require('./managementSkillsAutocomplete').default);
    app.get(`/tenant/:tenantId/management-skills`, require('./managementSkillsList').default);
    app.get(`/tenant/:tenantId/management-skills/:id`, require('./managementSkillsFind').default);
};
//# sourceMappingURL=index.js.map