"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/soft-skills`, require('./softSkillsCreate').default);
    app.put(`/tenant/:tenantId/soft-skills/:id`, require('./softSkillsUpdate').default);
    app.post(`/tenant/:tenantId/soft-skills/import`, require('./softSkillsImport').default);
    app.delete(`/tenant/:tenantId/soft-skills`, require('./softSkillsDestroy').default);
    app.get(`/tenant/:tenantId/soft-skills/autocomplete`, require('./softSkillsAutocomplete').default);
    app.get(`/tenant/:tenantId/soft-skills`, require('./softSkillsList').default);
    app.get(`/tenant/:tenantId/soft-skills/:id`, require('./softSkillsFind').default);
};
//# sourceMappingURL=index.js.map