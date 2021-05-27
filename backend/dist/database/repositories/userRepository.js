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
const fileRepository_1 = __importDefault(require("./fileRepository"));
const auditLogRepository_1 = __importDefault(require("./auditLogRepository"));
const crypto_1 = __importDefault(require("crypto"));
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const Error404_1 = __importDefault(require("../../errors/Error404"));
const sequelize_1 = __importDefault(require("sequelize"));
const userTenantUtils_1 = require("../utils/userTenantUtils");
const sequelizeArrayUtils_1 = __importDefault(require("../utils/sequelizeArrayUtils"));
const lodash_1 = __importDefault(require("lodash"));
const Op = sequelize_1.default.Op;
class UserRepository {
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.create({
                id: data.id || undefined,
                email: data.email,
                firstName: data.firstName || null,
                lastName: data.lastName || null,
                phoneNumber: data.phoneNumber || null,
                importHash: data.importHash || null,
                createdById: currentUser.id,
                updatedById: currentUser.id,
            }, { transaction });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.user.getTableName(),
                belongsToColumn: 'avatars',
                belongsToId: user.id,
            }, data.avatars, options);
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.CREATE,
                values: Object.assign(Object.assign({}, user.get({ plain: true })), { avatars: data.avatars }),
            }, options);
            return this.findById(user.id, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }));
        });
    }
    static createFromAuth(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.create({
                email: data.email,
                firstName: data.firstName,
                password: data.password,
            }, { transaction });
            delete user.password;
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.CREATE,
                values: Object.assign(Object.assign({}, user.get({ plain: true })), { avatars: data.avatars }),
            }, options);
            return this.findById(user.id, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }));
        });
    }
    static updateProfile(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findByPk(id, {
                transaction,
            });
            yield user.update({
                firstName: data.firstName || null,
                lastName: data.lastName || null,
                phoneNumber: data.phoneNumber || null,
                updatedById: currentUser.id,
            }, { transaction });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.user.getTableName(),
                belongsToColumn: 'avatars',
                belongsToId: user.id,
            }, data.avatars, options);
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: Object.assign(Object.assign({}, user.get({ plain: true })), { avatars: data.avatars }),
            }, options);
            return this.findById(user.id, options);
        });
    }
    static updatePassword(id, password, invalidateOldTokens, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findByPk(id, {
                transaction,
            });
            const data = {
                password,
                updatedById: currentUser.id,
            };
            if (invalidateOldTokens) {
                data.jwtTokenInvalidBefore = new Date();
            }
            yield user.update(data, { transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: {
                    id,
                },
            }, options);
            return this.findById(user.id, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }));
        });
    }
    static generateEmailVerificationToken(email, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findOne({
                where: { email },
                transaction,
            });
            const emailVerificationToken = crypto_1.default
                .randomBytes(20)
                .toString('hex');
            const emailVerificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000;
            yield user.update({
                emailVerificationToken,
                emailVerificationTokenExpiresAt,
                updatedById: currentUser.id,
            }, { transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: {
                    id: user.id,
                    emailVerificationToken,
                    emailVerificationTokenExpiresAt,
                },
            }, options);
            return emailVerificationToken;
        });
    }
    static generatePasswordResetToken(email, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findOne({
                where: { email },
                transaction,
            });
            const passwordResetToken = crypto_1.default
                .randomBytes(20)
                .toString('hex');
            const passwordResetTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000;
            yield user.update({
                passwordResetToken,
                passwordResetTokenExpiresAt,
                updatedById: currentUser.id,
            }, { transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: {
                    id: user.id,
                    passwordResetToken,
                    passwordResetTokenExpiresAt,
                },
            }, options);
            return passwordResetToken;
        });
    }
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findByPk(id, {
                transaction,
            });
            yield user.update({
                firstName: data.firstName || null,
                lastName: data.lastName || null,
                phoneNumber: data.phoneNumber || null,
                updatedById: currentUser.id,
            }, { transaction });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.user.getTableName(),
                belongsToColumn: 'avatars',
                belongsToId: user.id,
            }, data.avatars, options);
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: Object.assign(Object.assign({}, user.get({ plain: true })), { avatars: data.avatars, roles: data.roles }),
            }, options);
            return this.findById(user.id, options);
        });
    }
    static findByEmail(email, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.user.findOne({
                where: {
                    [Op.and]: sequelizeFilterUtils_1.default.ilikeExact('user', 'email', email),
                },
                transaction,
            });
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static findByEmailWithoutAvatar(email, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.user.findOne({
                where: {
                    [Op.and]: sequelizeFilterUtils_1.default.ilikeExact('user', 'email', email),
                },
                transaction,
            });
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let whereAnd = [];
            let include = [];
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!filter || (!filter.role && !filter.status)) {
                include.push({
                    model: options.database.tenantUser,
                    as: 'tenants',
                    where: {
                        ['tenantId']: currentTenant.id,
                    },
                });
            }
            if (filter) {
                if (filter.id) {
                    whereAnd.push({
                        ['id']: filter.id,
                    });
                }
                if (filter.fullName) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('user', 'fullName', filter.fullName));
                }
                if (filter.email) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('user', 'email', filter.email));
                }
                if (filter.role) {
                    const innerWhereAnd = [];
                    innerWhereAnd.push({
                        ['tenantId']: currentTenant.id,
                    });
                    innerWhereAnd.push(sequelizeArrayUtils_1.default.filter(`tenants`, `roles`, filter.role));
                    include.push({
                        model: options.database.tenantUser,
                        as: 'tenants',
                        where: { [Op.and]: innerWhereAnd },
                    });
                }
                if (filter.status) {
                    include.push({
                        model: options.database.tenantUser,
                        as: 'tenants',
                        where: {
                            ['tenantId']: currentTenant.id,
                            status: filter.status,
                        },
                    });
                }
                if (filter.createdAtRange) {
                    const [start, end] = filter.createdAtRange;
                    if (start !== undefined &&
                        start !== null &&
                        start !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined &&
                        end !== null &&
                        end !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
            }
            const where = { [Op.and]: whereAnd };
            let { rows, count, } = yield options.database.user.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['email', 'ASC']],
                transaction,
            });
            rows = yield this._fillWithRelationsAndFilesForRows(rows, options);
            rows = this._mapUserForTenantForRows(rows, currentTenant);
            return { rows, count };
        });
    }
    static findAllAutocomplete(query, limit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [];
            let include = [
                {
                    model: options.database.tenantUser,
                    as: 'tenants',
                    where: {
                        ['tenantId']: currentTenant.id,
                    },
                },
            ];
            if (query) {
                whereAnd.push({
                    [Op.or]: [
                        {
                            ['id']: sequelizeFilterUtils_1.default.uuid(query),
                        },
                        sequelizeFilterUtils_1.default.ilikeIncludes('user', 'fullName', query),
                        sequelizeFilterUtils_1.default.ilikeIncludes('user', 'email', query),
                    ],
                });
            }
            const where = { [Op.and]: whereAnd };
            let users = yield options.database.user.findAll({
                attributes: ['id', 'fullName', 'email'],
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                order: [['fullName', 'ASC']],
            });
            users = this._mapUserForTenantForRows(users, currentTenant);
            const buildText = (user) => {
                if (!user.fullName) {
                    return user.email;
                }
                return `${user.fullName} <${user.email}>`;
            };
            return users.map((user) => ({
                id: user.id,
                label: buildText(user),
            }));
        });
    }
    static findById(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.user.findByPk(id, {
                transaction,
            });
            record = yield this._fillWithRelationsAndFiles(record, options);
            if (!record) {
                throw new Error404_1.default();
            }
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!options || !options.bypassPermissionValidation) {
                if (!userTenantUtils_1.isUserInTenant(record, currentTenant)) {
                    throw new Error404_1.default();
                }
                record = this._mapUserForTenant(record, currentTenant);
            }
            return record;
        });
    }
    static findByIdWithoutAvatar(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.user.findByPk(id, {
                transaction,
            });
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            record = yield this._fillWithRelationsAndFiles(record, options);
            if (!options || !options.bypassPermissionValidation) {
                if (!userTenantUtils_1.isUserInTenant(record, currentTenant)) {
                    throw new Error404_1.default();
                }
            }
            return record;
        });
    }
    static findByPasswordResetToken(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.user.findOne({
                where: {
                    passwordResetToken: token,
                    // Find only not expired tokens
                    passwordResetTokenExpiresAt: {
                        [options.database.Sequelize.Op.gt]: Date.now(),
                    },
                },
                transaction,
            });
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static findByEmailVerificationToken(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.user.findOne({
                where: {
                    emailVerificationToken: token,
                    emailVerificationTokenExpiresAt: {
                        [options.database.Sequelize.Op.gt]: Date.now(),
                    },
                },
                transaction,
            });
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static markEmailVerified(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.findByPk(id, {
                transaction,
            });
            yield user.update({
                emailVerified: true,
                updatedById: currentUser.id,
            }, { transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.UPDATE,
                values: {
                    id,
                    emailVerified: true,
                },
            }, options);
            return true;
        });
    }
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            return options.database.user.count({
                where: filter,
                transaction,
            });
        });
    }
    static findPassword(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.user.findByPk(id, {
                // raw is responsible
                // for bringing the password
                raw: true,
                transaction,
            });
            if (!record) {
                return null;
            }
            return record.password;
        });
    }
    static createFromSocial(provider, providerId, email, emailVerified, firstName, lastName, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                email,
                emailVerified,
                providerId,
                provider,
                firstName,
                lastName,
            };
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const user = yield options.database.user.create(data, {
                transaction,
            });
            delete user.password;
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.CREATE,
                values: Object.assign({}, user.get({ plain: true })),
            }, options);
            return this.findById(user.id, Object.assign(Object.assign({}, options), { bypassPermissionValidation: true }));
        });
    }
    static cleanupForRelationships(userOrUsers) {
        if (!userOrUsers) {
            return userOrUsers;
        }
        if (Array.isArray(userOrUsers)) {
            return userOrUsers.map((user) => lodash_1.default.pick(user, [
                'id',
                'firstName',
                'lastName',
                'email',
            ]));
        }
        return lodash_1.default.pick(userOrUsers, [
            'id',
            'firstName',
            'lastName',
            'email',
        ]);
    }
    static filterIdInTenant(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return lodash_1.default.get(yield this.filterIdsInTenant([id], options), '[0]', null);
        });
    }
    static filterIdsInTenant(ids, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ids || !ids.length) {
                return [];
            }
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const where = {
                id: {
                    [Op.in]: ids,
                },
            };
            let include = [
                {
                    model: options.database.tenantUser,
                    as: 'tenants',
                    where: {
                        ['tenantId']: currentTenant.id,
                    },
                },
            ];
            const records = yield options.database.user.findAll({
                attributes: ['id'],
                where,
                include,
            });
            return records.map((record) => record.id);
        });
    }
    static _fillWithRelationsAndFilesForRows(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!rows) {
                return rows;
            }
            return Promise.all(rows.map((record) => this._fillWithRelationsAndFiles(record, options)));
        });
    }
    static _fillWithRelationsAndFiles(record, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return record;
            }
            const output = record.get({ plain: true });
            output.avatars = yield fileRepository_1.default.fillDownloadUrl(yield record.getAvatars({
                transaction: sequelizeRepository_1.default.getTransaction(options),
            }));
            output.tenants = yield record.getTenants({
                include: [
                    {
                        model: options.database.tenant,
                        as: 'tenant',
                        required: true,
                        include: ['settings'],
                    },
                ],
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            return output;
        });
    }
    /**
     * Maps the users data to show only the current tenant related info
     */
    static _mapUserForTenantForRows(rows, tenant) {
        if (!rows) {
            return rows;
        }
        return rows.map((record) => this._mapUserForTenant(record, tenant));
    }
    /**
     * Maps the user data to show only the current tenant related info
     */
    static _mapUserForTenant(user, tenant) {
        if (!user || !user.tenants) {
            return user;
        }
        const tenantUser = user.tenants.find((tenantUser) => tenantUser &&
            tenantUser.tenant &&
            String(tenantUser.tenant.id) === String(tenant.id));
        delete user.tenants;
        const status = tenantUser ? tenantUser.status : null;
        const roles = tenantUser ? tenantUser.roles : [];
        // If the user is only invited,
        // tenant members can only see its email
        const otherData = status === 'active' ? user : {};
        return Object.assign(Object.assign({}, otherData), { id: user.id, email: user.email, roles,
            status });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=userRepository.js.map