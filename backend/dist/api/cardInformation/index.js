"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/card-information`, require('./cardInformationCreate').default);
    app.put(`/tenant/:tenantId/card-information/:id`, require('./cardInformationUpdate').default);
    app.post(`/tenant/:tenantId/card-information/import`, require('./cardInformationImport').default);
    app.delete(`/tenant/:tenantId/card-information`, require('./cardInformationDestroy').default);
    app.get(`/tenant/:tenantId/card-information/autocomplete`, require('./cardInformationAutocomplete').default);
    app.get(`/tenant/:tenantId/card-information`, require('./cardInformationList').default);
    app.get(`/tenant/:tenantId/card-information/:id`, require('./cardInformationFind').default);
};
//# sourceMappingURL=index.js.map