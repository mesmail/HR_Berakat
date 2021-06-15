"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/common-comitees`, require('./commonComiteesCreate').default);
    app.put(`/tenant/:tenantId/common-comitees/:id`, require('./commonComiteesUpdate').default);
    app.post(`/tenant/:tenantId/common-comitees/import`, require('./commonComiteesImport').default);
    app.delete(`/tenant/:tenantId/common-comitees`, require('./commonComiteesDestroy').default);
    app.get(`/tenant/:tenantId/common-comitees/autocomplete`, require('./commonComiteesAutocomplete').default);
    app.get(`/tenant/:tenantId/common-comitees`, require('./commonComiteesList').default);
    app.get(`/tenant/:tenantId/common-comitees/:id`, require('./commonComiteesFind').default);
};
//# sourceMappingURL=index.js.map