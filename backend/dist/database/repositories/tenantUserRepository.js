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
const crypto_1 = __importDefault(require("crypto"));
class TenantUserRepository {
    static findByTenantAndUser(tenantId, userId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            return yield options.database.tenantUser.findOne({
                where: {
                    tenantId,
                    userId,
                },
                transaction,
            });
        });
    }
    static findByInvitationToken(invitationToken, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            return yield options.database.tenantUser.findOne({
                where: {
                    invitationToken,
                },
                include: ['tenant', 'user'],
                transaction,
            });
        });
    }
    static create(tenant, user, roles, options) {
        return __awaiter(this, void 0, void 0, function* () {
            roles = roles || [];
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const status = selectStatus('active', roles);
            yield options.database.tenantUser.create({
                tenantId: tenant.id,
                userId: user.id,
                status,
                roles,
            }, { transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.CREATE,
                values: {
                    email: user.email,
                    status,
                    roles,
                },
            }, options);
        });
    }
    static destroy(tenantId, id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let user = yield options.database.user.findByPk(id, {
                transaction,
            });
            let tenantUser = yield this.findByTenantAndUser(tenantId, id, options);
            yield tenantUser.destroy({ transaction });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: auditLogRepository_1.default.DELETE,
                values: {
                    email: user.email,
                },
            }, options);
        });
    }
    static updateRoles(tenantId, id, roles, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let user = yield options.database.user.findByPk(id, {
                transaction,
            });
            let tenantUser = yield this.findByTenantAndUser(tenantId, id, options);
            let isCreation = false;
            if (!tenantUser) {
                isCreation = true;
                tenantUser = yield options.database.tenantUser.create({
                    tenantId,
                    userId: id,
                    status: selectStatus('invited', []),
                    invitationToken: crypto_1.default
                        .randomBytes(20)
                        .toString('hex'),
                    roles: [],
                }, { transaction });
            }
            let { roles: existingRoles } = tenantUser;
            let newRoles = [];
            if (options.addRoles) {
                newRoles = [...new Set([...existingRoles, ...roles])];
            }
            else if (options.removeOnlyInformedRoles) {
                newRoles = existingRoles.filter((existingRole) => !roles.includes(existingRole));
            }
            else {
                newRoles = roles || [];
            }
            tenantUser.roles = newRoles;
            tenantUser.status = selectStatus(tenantUser.status, newRoles);
            yield tenantUser.save({
                transaction,
            });
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: user.id,
                action: isCreation
                    ? auditLogRepository_1.default.CREATE
                    : auditLogRepository_1.default.UPDATE,
                values: {
                    email: user.email,
                    status: tenantUser.status,
                    roles: newRoles,
                },
            }, options);
            return tenantUser;
        });
    }
    static acceptInvitation(invitationToken, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            let invitationTenantUser = yield this.findByInvitationToken(invitationToken, options);
            const isSameEmailFromInvitation = invitationTenantUser.userId === currentUser.id;
            let existingTenantUser = yield this.findByTenantAndUser(invitationTenantUser.tenantId, currentUser.id, options);
            // There might be a case that the invite was sent to another email,
            // and the current user is also invited or is already a member
            if (existingTenantUser &&
                existingTenantUser.id !== invitationTenantUser.id) {
                // destroys the new invite
                yield this.destroy(invitationTenantUser.tenantId, invitationTenantUser.userId, options);
                // Merges the roles from the invitation and the current tenant user
                existingTenantUser.roles = [
                    ...new Set([
                        ...existingTenantUser.roles,
                        ...invitationTenantUser.roles,
                    ]),
                ];
                // Change the status to active (in case the existing one is also invited)
                existingTenantUser.invitationToken = null;
                existingTenantUser.status = selectStatus('active', existingTenantUser.roles);
                yield existingTenantUser.save({
                    transaction,
                });
            }
            else {
                // In this case there's no tenant user for the current user and the tenant
                // Sometimes the invitation is sent not to the
                // correct email. In those cases the userId must be changed
                // to match the correct user.
                invitationTenantUser.userId = currentUser.id;
                invitationTenantUser.invitationToken = null;
                invitationTenantUser.status = selectStatus('active', invitationTenantUser.roles);
                yield invitationTenantUser.save({
                    transaction,
                });
            }
            const emailVerified = currentUser.emailVerified ||
                isSameEmailFromInvitation;
            yield options.database.user.update({
                emailVerified,
            }, { where: { id: currentUser.id }, transaction });
            const auditLogRoles = existingTenantUser
                ? existingTenantUser.roles
                : invitationTenantUser.roles;
            yield auditLogRepository_1.default.log({
                entityName: 'user',
                entityId: currentUser.id,
                action: auditLogRepository_1.default.UPDATE,
                values: {
                    email: currentUser.email,
                    roles: auditLogRoles,
                    status: selectStatus('active', auditLogRoles),
                },
            }, options);
        });
    }
}
exports.default = TenantUserRepository;
function selectStatus(oldStatus, newRoles) {
    newRoles = newRoles || [];
    if (oldStatus === 'invited') {
        return oldStatus;
    }
    if (!newRoles.length) {
        return 'empty-permissions';
    }
    return 'active';
}
//# sourceMappingURL=tenantUserRepository.js.map