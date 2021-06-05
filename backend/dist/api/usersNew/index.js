"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/users-new`, require('./usersNewCreate').default);
    app.put(`/tenant/:tenantId/users-new/:id`, require('./usersNewUpdate').default);
    app.post(`/tenant/:tenantId/users-new/import`, require('./usersNewImport').default);
    app.delete(`/tenant/:tenantId/users-new`, require('./usersNewDestroy').default);
    app.get(`/tenant/:tenantId/users-new/autocomplete`, require('./usersNewAutocomplete').default);
    app.get(`/tenant/:tenantId/users-new`, require('./usersNewList').default);
    app.get(`/tenant/:tenantId/users-new/:id`, require('./usersNewFind').default);
};
//# sourceMappingURL=index.js.map