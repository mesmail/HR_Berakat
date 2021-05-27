"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
class Error403 extends Error {
    constructor(language, messageCode) {
        let message;
        if (messageCode && i18n_1.i18nExists(language, messageCode)) {
            message = i18n_1.i18n(language, messageCode);
        }
        message =
            message || i18n_1.i18n(language, 'errors.forbidden.message');
        super(message);
        this.code = 403;
    }
}
exports.default = Error403;
//# sourceMappingURL=Error403.js.map