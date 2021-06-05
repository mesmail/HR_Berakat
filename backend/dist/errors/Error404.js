"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../i18n");
class Error404 extends Error {
    constructor(language, messageCode) {
        let message;
        if (messageCode && i18n_1.i18nExists(language, messageCode)) {
            message = i18n_1.i18n(language, messageCode);
        }
        message =
            message || i18n_1.i18n(language, 'errors.notFound.message');
        super(message);
        this.code = 404;
    }
}
exports.default = Error404;
//# sourceMappingURL=Error404.js.map