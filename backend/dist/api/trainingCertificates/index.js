"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/training-certificates`, require('./trainingCertificatesCreate').default);
    app.put(`/tenant/:tenantId/training-certificates/:id`, require('./trainingCertificatesUpdate').default);
    app.post(`/tenant/:tenantId/training-certificates/import`, require('./trainingCertificatesImport').default);
    app.delete(`/tenant/:tenantId/training-certificates`, require('./trainingCertificatesDestroy').default);
    app.get(`/tenant/:tenantId/training-certificates/autocomplete`, require('./trainingCertificatesAutocomplete').default);
    app.get(`/tenant/:tenantId/training-certificates`, require('./trainingCertificatesList').default);
    app.get(`/tenant/:tenantId/training-certificates/:id`, require('./trainingCertificatesFind').default);
};
//# sourceMappingURL=index.js.map