"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = exports.i18nExists = void 0;
const en_1 = __importDefault(require("./en"));
const pt_BR_1 = __importDefault(require("./pt-BR"));
const get_1 = __importDefault(require("lodash/get"));
const es_1 = __importDefault(require("./es"));
/**
 * Object with the languages available.
 */
const languages = {
    en: en_1.default,
    'pt-BR': pt_BR_1.default,
    es: es_1.default,
};
/**
 * Replaces the parameters of a message with the args.
 */
function format(message, args) {
    if (!message) {
        return null;
    }
    return message.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match;
    });
}
/**
 * Checks if the key exists on the language.
 */
exports.i18nExists = (languageCode, key) => {
    const dictionary = languages[languageCode] || languages['en'];
    const message = get_1.default(dictionary, key);
    return Boolean(message);
};
/**
 * Returns the translation based on the key.
 */
exports.i18n = (languageCode, key, ...args) => {
    const dictionary = languages[languageCode] || languages['en'];
    const message = get_1.default(dictionary, key);
    if (!message) {
        return key;
    }
    return format(message, args);
};
//# sourceMappingURL=index.js.map