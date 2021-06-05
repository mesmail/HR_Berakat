"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.put(`/tenant/:tenantId/settings`, require('./settingsSave').default);
    app.get(`/tenant/:tenantId/settings`, require('./settingsFind').default);
};
//# sourceMappingURL=index.js.map