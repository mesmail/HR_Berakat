"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.get(`/tenant/:tenantId/audit-log`, require('./auditLogList').default);
};
//# sourceMappingURL=index.js.map