"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/professional-certifications`, require('./professionalCertificationsCreate').default);
    app.put(`/tenant/:tenantId/professional-certifications/:id`, require('./professionalCertificationsUpdate').default);
    app.post(`/tenant/:tenantId/professional-certifications/import`, require('./professionalCertificationsImport').default);
    app.delete(`/tenant/:tenantId/professional-certifications`, require('./professionalCertificationsDestroy').default);
    app.get(`/tenant/:tenantId/professional-certifications/autocomplete`, require('./professionalCertificationsAutocomplete').default);
    app.get(`/tenant/:tenantId/professional-certifications`, require('./professionalCertificationsList').default);
    app.get(`/tenant/:tenantId/professional-certifications/:id`, require('./professionalCertificationsFind').default);
};
//# sourceMappingURL=index.js.map