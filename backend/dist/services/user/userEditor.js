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
const roles_1 = __importDefault(require("../../security/roles"));
const assert_1 = __importDefault(require("assert"));
const Error400_1 = __importDefault(require("../../errors/Error400"));
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const userRepository_1 = __importDefault(require("../../database/repositories/userRepository"));
const tenantUserRepository_1 = __importDefault(require("../../database/repositories/tenantUserRepository"));
const plans_1 = __importDefault(require("../../security/plans"));
/**
 * Handles the edition of the user(s) via the User page.
 */
class UserEditor {
    constructor(options) {
        this.options = options;
    }
    /**
     * Updates a user via the User page.
     */
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = data;
            yield this._validate();
            try {
                this.transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
                yield this._loadUser();
                yield this._updateAtDatabase();
                yield sequelizeRepository_1.default.commitTransaction(this.transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(this.transaction);
                throw error;
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
    /**
     * Loads the user and validate that it exists.
     */
    _loadUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield userRepository_1.default.findById(this.data.id, this.options);
            if (!this.user) {
                throw new Error400_1.default(this.options.language, 'user.errors.userNotFound');
            }
        });
    }
    /**
     * Updates the user at the database.
     */
    _updateAtDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield tenantUserRepository_1.default.updateRoles(this.options.currentTenant.id, this.data.id, this.data.roles, this.options);
        });
    }
    /**
     * Checks if the user is removing the responsable for the plan
     */
    _isRemovingPlanUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._roles.includes(roles_1.default.values.admin)) {
                return false;
            }
            const currentTenant = this.options.currentTenant;
            if (currentTenant.plan === plans_1.default.values.free) {
                return false;
            }
            if (!currentTenant.planUserId) {
                return false;
            }
            return (String(this.data.id) ===
                String(currentTenant.planUserId));
        });
    }
    /**
     * Checks if the user is removing it's own admin role
     */
    _isRemovingOwnAdminRole() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._roles.includes(roles_1.default.values.admin)) {
                return false;
            }
            if (String(this.data.id) !==
                String(this.options.currentUser.id)) {
                return false;
            }
            const tenantUser = this.options.currentUser.tenants.find((userTenant) => userTenant.tenant.id ===
                this.options.currentTenant.id);
            return tenantUser.roles.includes(roles_1.default.values.admin);
        });
    }
    _validate() {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default(this.options.currentTenant.id, 'tenantId is required');
            assert_1.default(this.options.currentUser, 'currentUser is required');
            assert_1.default(this.options.currentUser.id, 'currentUser.id is required');
            assert_1.default(this.options.currentUser.email, 'currentUser.email is required');
            assert_1.default(this.data.id, 'id is required');
            assert_1.default(this._roles, 'roles is required (can be empty)');
            if (yield this._isRemovingPlanUser()) {
                throw new Error400_1.default(this.options.language, 'user.errors.revokingPlanUser');
            }
            if (yield this._isRemovingOwnAdminRole()) {
                throw new Error400_1.default(this.options.language, 'user.errors.revokingOwnPermission');
            }
        });
    }
}
exports.default = UserEditor;
//# sourceMappingURL=userEditor.js.map