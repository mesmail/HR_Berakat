"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantSubdomain = void 0;
const config_1 = require("../config");
exports.tenantSubdomain = {
    frontendUrl(tenant) {
        const frontendUrlWithSubdomain = config_1.getConfig()
            .FRONTEND_URL_WITH_SUBDOMAIN;
        if (config_1.getConfig().TENANT_MODE !== 'multi-with-subdomain' ||
            !frontendUrlWithSubdomain ||
            !tenant ||
            !tenant.url) {
            return config_1.getConfig().FRONTEND_URL;
        }
        return frontendUrlWithSubdomain.replace('[subdomain]', tenant.url);
    },
};
//# sourceMappingURL=tenantSubdomain.js.map