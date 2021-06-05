"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/file/upload`, require('./localhost/upload').default);
    app.get(`/file/download`, require('./localhost/download').default);
    app.get(`/tenant/:tenantId/file/credentials`, require('./credentials').default);
};
//# sourceMappingURL=index.js.map