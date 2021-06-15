"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/connection-level`, require('./connectionLevelCreate').default);
    app.put(`/tenant/:tenantId/connection-level/:id`, require('./connectionLevelUpdate').default);
    app.post(`/tenant/:tenantId/connection-level/import`, require('./connectionLevelImport').default);
    app.delete(`/tenant/:tenantId/connection-level`, require('./connectionLevelDestroy').default);
    app.get(`/tenant/:tenantId/connection-level/autocomplete`, require('./connectionLevelAutocomplete').default);
    app.get(`/tenant/:tenantId/connection-level`, require('./connectionLevelList').default);
    app.get(`/tenant/:tenantId/connection-level/:id`, require('./connectionLevelFind').default);
};
//# sourceMappingURL=index.js.map