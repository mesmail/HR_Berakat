"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/leave-application-form`, require('./leaveApplicationFormCreate').default);
    app.put(`/tenant/:tenantId/leave-application-form/:id`, require('./leaveApplicationFormUpdate').default);
    app.post(`/tenant/:tenantId/leave-application-form/import`, require('./leaveApplicationFormImport').default);
    app.delete(`/tenant/:tenantId/leave-application-form`, require('./leaveApplicationFormDestroy').default);
    app.get(`/tenant/:tenantId/leave-application-form/autocomplete`, require('./leaveApplicationFormAutocomplete').default);
    app.get(`/tenant/:tenantId/leave-application-form`, require('./leaveApplicationFormList').default);
    app.get(`/tenant/:tenantId/leave-application-form/:id`, require('./leaveApplicationFormFind').default);
};
//# sourceMappingURL=index.js.map