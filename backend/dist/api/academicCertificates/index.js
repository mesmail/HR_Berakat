"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/academic-certificates`, require('./academicCertificatesCreate').default);
    app.put(`/tenant/:tenantId/academic-certificates/:id`, require('./academicCertificatesUpdate').default);
    app.post(`/tenant/:tenantId/academic-certificates/import`, require('./academicCertificatesImport').default);
    app.delete(`/tenant/:tenantId/academic-certificates`, require('./academicCertificatesDestroy').default);
    app.get(`/tenant/:tenantId/academic-certificates/autocomplete`, require('./academicCertificatesAutocomplete').default);
    app.get(`/tenant/:tenantId/academic-certificates`, require('./academicCertificatesList').default);
    app.get(`/tenant/:tenantId/academic-certificates/:id`, require('./academicCertificatesFind').default);
};
//# sourceMappingURL=index.js.map