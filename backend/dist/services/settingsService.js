"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeRepository_1 = __importDefault(require("../database/repositories/sequelizeRepository"));
const settingsRepository_1 = __importDefault(require("../database/repositories/settingsRepository"));
const DEFAULT_SETTINGS = {
    theme: 'default',
};
class SettingsService {
    static findOrCreateDefault(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return settingsRepository_1.default.findOrCreateDefault(DEFAULT_SETTINGS, options);
        });
    }
    static save(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(options.database);
            const settings = yield settingsRepository_1.default.save(data, options);
            yield sequelizeRepository_1.default.commitTransaction(transaction);
            return settings;
        });
    }
}
exports.default = SettingsService;
//# sourceMappingURL=settingsService.js.map