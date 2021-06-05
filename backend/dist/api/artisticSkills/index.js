"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/artistic-skills`, require('./artisticSkillsCreate').default);
    app.put(`/tenant/:tenantId/artistic-skills/:id`, require('./artisticSkillsUpdate').default);
    app.post(`/tenant/:tenantId/artistic-skills/import`, require('./artisticSkillsImport').default);
    app.delete(`/tenant/:tenantId/artistic-skills`, require('./artisticSkillsDestroy').default);
    app.get(`/tenant/:tenantId/artistic-skills/autocomplete`, require('./artisticSkillsAutocomplete').default);
    app.get(`/tenant/:tenantId/artistic-skills`, require('./artisticSkillsList').default);
    app.get(`/tenant/:tenantId/artistic-skills/:id`, require('./artisticSkillsFind').default);
};
//# sourceMappingURL=index.js.map