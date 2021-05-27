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
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const auditLogRepository_1 = __importDefault(require("./auditLogRepository"));
const fileRepository_1 = __importDefault(require("./fileRepository"));
const get_1 = __importDefault(require("lodash/get"));
class SettingsRepository {
    static findOrCreateDefault(defaults, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const [settings,] = yield options.database.settings.findOrCreate({
                where: { id: tenant.id, tenantId: tenant.id },
                defaults: Object.assign(Object.assign({}, defaults), { id: tenant.id, tenantId: tenant.id, createdById: currentUser ? currentUser.id : null }),
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            return this._fillWithRelationsAndFiles(settings, options);
        });
    }
    static save(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            data.backgroundImageUrl = get_1.default(data, 'backgroundImages[0].downloadUrl', null);
            data.logoUrl = get_1.default(data, 'logos[0].downloadUrl', null);
            const [settings,] = yield options.database.settings.findOrCreate({
                where: { id: tenant.id, tenantId: tenant.id },
                defaults: Object.assign(Object.assign({}, data), { id: tenant.id, tenantId: tenant.id, createdById: currentUser ? currentUser.id : null }),
                transaction,
            });
            yield settings.update(data, {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.settings.getTableName(),
                belongsToColumn: 'logos',
                belongsToId: settings.id,
            }, data.logos, options);
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.settings.getTableName(),
                belongsToColumn: 'backgroundImages',
                belongsToId: settings.id,
            }, data.backgroundImages, options);
            yield auditLogRepository_1.default.log({
                entityName: 'settings',
                entityId: settings.id,
                action: auditLogRepository_1.default.UPDATE,
                values: data,
            }, options);
            return yield this._fillWithRelationsAndFiles(settings, options);
        });
    }
    static _fillWithRelationsAndFiles(record, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return record;
            }
            const output = record.get({ plain: true });
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            output.logos = yield fileRepository_1.default.fillDownloadUrl(yield record.getLogos({
                transaction,
            }));
            output.backgroundImages = yield fileRepository_1.default.fillDownloadUrl(yield record.getBackgroundImages({
                transaction,
            }));
            return output;
        });
    }
}
exports.default = SettingsRepository;
//# sourceMappingURL=settingsRepository.js.map