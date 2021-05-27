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
const assert_1 = __importDefault(require("assert"));
const emailSender_1 = __importDefault(require("../../services/emailSender"));
const userRepository_1 = __importDefault(require("../../database/repositories/userRepository"));
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const tenantUserRepository_1 = __importDefault(require("../../database/repositories/tenantUserRepository"));
const tenantSubdomain_1 = require("../tenantSubdomain");
class UserCreator {
    constructor(options) {
        this.emailsToInvite = [];
        this.emails = [];
        this.sendInvitationEmails = true;
        this.options = options;
    }
    /**
     * Creates new user(s) via the User page.
     * Sends Invitation Emails if flagged.
     */
    execute(data, sendInvitationEmails = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = data;
            this.sendInvitationEmails = sendInvitationEmails;
            yield this._validate();
            try {
                this.transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
                yield this._addOrUpdateAll();
                yield sequelizeRepository_1.default.commitTransaction(this.transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(this.transaction);
                throw error;
            }
            if (this._hasEmailsToInvite) {
                yield this._sendAllInvitationEmails();
            }
        });
    }
    get _roles() {
        if (this.data.roles &&
            !Array.isArray(this.data.roles)) {
            return [this.data.roles];
        }
        else {
            const uniqueRoles = [...new Set(this.data.roles)];
            return uniqueRoles;
        }
    }
    get _emails() {
        if (this.data.emails &&
            !Array.isArray(this.data.emails)) {
            this.emails = [this.data.emails];
        }
        else {
            const uniqueEmails = [...new Set(this.data.emails)];
            this.emails = uniqueEmails;
        }
        return this.emails.map((email) => email.trim());
    }
    /**
     * Creates or updates many users at once.
     */
    _addOrUpdateAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(this.emails.map((email) => this._addOrUpdate(email)));
        });
    }
    /**
     * Creates or updates the user passed.
     * If the user already exists, it only adds the role to the user.
     */
    _addOrUpdate(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield userRepository_1.default.findByEmailWithoutAvatar(email, Object.assign(Object.assign({}, this.options), { transaction: this.transaction }));
            if (!user) {
                user = yield userRepository_1.default.create({ email }, Object.assign(Object.assign({}, this.options), { transaction: this.transaction }));
            }
            const isUserAlreadyInTenant = user.tenants.some((userTenant) => userTenant.tenant.id ===
                this.options.currentTenant.id);
            const tenantUser = yield tenantUserRepository_1.default.updateRoles(this.options.currentTenant.id, user.id, this._roles, Object.assign(Object.assign({}, this.options), { addRoles: true, transaction: this.transaction }));
            if (!isUserAlreadyInTenant) {
                this.emailsToInvite.push({
                    email,
                    token: tenantUser.invitationToken,
                });
            }
        });
    }
    /**
     * Verify if there are emails to invite.
     */
    get _hasEmailsToInvite() {
        return (this.emailsToInvite && this.emailsToInvite.length);
    }
    /**
     * Sends all invitation emails.
     */
    _sendAllInvitationEmails() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sendInvitationEmails) {
                return;
            }
            return Promise.all(this.emailsToInvite.map((emailToInvite) => {
                const link = `${tenantSubdomain_1.tenantSubdomain.frontendUrl(this.options.currentTenant)}/auth/invitation?token=${emailToInvite.token}`;
                return new emailSender_1.default(emailSender_1.default.TEMPLATES.INVITATION, {
                    tenant: this.options.currentTenant,
                    link,
                }).sendTo(emailToInvite.email);
            }));
        });
    }
    /**
     * Validates the user(s) data.
     */
    _validate() {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default(this.options.currentUser, 'currentUser is required');
            assert_1.default(this.options.currentTenant.id, 'tenantId is required');
            assert_1.default(this.options.currentUser.id, 'currentUser.id is required');
            assert_1.default(this.options.currentUser.email, 'currentUser.email is required');
            assert_1.default(this._emails && this._emails.length, 'emails is required');
            assert_1.default(this._roles && this._roles.length, 'roles is required');
        });
    }
}
exports.default = UserCreator;
//# sourceMappingURL=userCreator.js.map