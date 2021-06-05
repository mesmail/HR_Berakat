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
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const sequelize_1 = __importDefault(require("sequelize"));
const Op = sequelize_1.default.Op;
class AuditLogRepository {
    static get CREATE() {
        return 'create';
    }
    static get UPDATE() {
        return 'update';
    }
    static get DELETE() {
        return 'delete';
    }
    /**
     * Saves an Audit Log to the database.
     *
     * @param  {Object} log - The log being saved.
     * @param  {string} log.entityName - The name of the entity. Ex.: customer
     * @param  {string} log.entityId - The id of the entity.
     * @param  {string} log.action - The action [create, update or delete].
     * @param  {Object} log.values - The JSON log value with data of the entity.
     *
     * @param  {Object} options
     * @param  {Object} options.transaction - The current database transaction.
     * @param  {Object} options.currentUser - The current logged user.
     * @param  {Object} options.currentTenant - The current currentTenant.
     */
    static log({ entityName, entityId, action, values }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const log = yield options.database.auditLog.create({
                entityName,
                tenantId: currentTenant.id,
                entityId,
                action,
                values,
                timestamp: new Date(),
                createdById: options && options.currentUser
                    ? options.currentUser.id
                    : null,
                createdByEmail: options && options.currentUser
                    ? options.currentUser.email
                    : null,
            }, { transaction });
            return log;
        });
    }
    static findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [];
            let include = [];
            whereAnd.push({
                tenantId: tenant.id,
            });
            if (filter) {
                if (filter.timestampRange) {
                    const [start, end] = filter.timestampRange;
                    if (start !== undefined &&
                        start !== null &&
                        start !== '') {
                        whereAnd.push({
                            ['timestamp']: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined &&
                        end !== null &&
                        end !== '') {
                        whereAnd.push({
                            ['timestamp']: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
                if (filter.action) {
                    whereAnd.push({
                        ['action']: filter.action,
                    });
                }
                if (filter.entityId) {
                    whereAnd.push({
                        ['entityId']: filter.entityId,
                    });
                }
                if (filter.createdByEmail) {
                    whereAnd.push({
                        [Op.and]: sequelizeFilterUtils_1.default.ilikeIncludes('auditLog', 'createdByEmail', filter.createdByEmail),
                    });
                }
                if (filter.entityNames && filter.entityNames.length) {
                    whereAnd.push({
                        ['entityName']: {
                            [Op.in]: filter.entityNames,
                        },
                    });
                }
            }
            const where = { [Op.and]: whereAnd };
            return options.database.auditLog.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['timestamp', 'DESC']],
            });
        });
    }
}
exports.default = AuditLogRepository;
//# sourceMappingURL=auditLogRepository.js.map