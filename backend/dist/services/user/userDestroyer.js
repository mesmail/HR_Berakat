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
const userRepository_1 = __importDefault(require("../../database/repositories/userRepository"));
const tenantUserRepository_1 = __importDefault(require("../../database/repositories/tenantUserRepository"));
const assert_1 = __importDefault(require("assert"));
const Error400_1 = __importDefault(require("../../errors/Error400"));
const plans_1 = __importDefault(require("../../security/plans"));
/**
 * Handles removing the permissions of the users.
 */
class UserDestroyer {
    constructor(options) {
        this.options = options;
    }
    /**
     * Removes all passed users.
     */
    destroyAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = data;
            yield this._validate();
            try {
                this.transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
                yield Promise.all(this._ids.map((id) => this._destroy(id)));
                return sequelizeRepository_1.default.commitTransaction(this.transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(this.transaction);
                throw error;
            }
        });
    }
    get _ids() {
        let ids;
        if (this.data.ids && !Array.isArray(this.data.ids)) {
            ids = [this.data.ids];
        }
        else {
            const uniqueIds = [...new Set(this.data.ids)];
            ids = uniqueIds;
        }
        return ids.map((id) => id.trim());
    }
    _destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository_1.default.findByIdWithoutAvatar(id, this.options);
            yield tenantUserRepository_1.default.destroy(this.options.currentTenant.id, user.id, this.options);
        });
    }
    /**
     * Checks if the user is removing the responsable for the plan
     */
    _isRemovingPlanUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const currentTenant = this.options.currentTenant;
            if (currentTenant.plan === plans_1.default.values.free) {
                return false;
            }
            if (!currentTenant.planUserId) {
                return false;
            }
            return this._ids.includes(String(currentTenant.planUserId));
        });
    }
    /**
     * Checks if the user is removing himself
     */
    _isRemovingHimself() {
        return this._ids.includes(String(this.options.currentUser.id));
    }
    _validate() {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default(this.options.currentTenant.id, 'tenantId is required');
            assert_1.default(this.options.currentUser, 'currentUser is required');
            assert_1.default(this.options.currentUser.id, 'currentUser.id is required');
            assert_1.default(this.options.currentUser.email, 'currentUser.email is required');
            assert_1.default(this._ids && this._ids.length, 'ids is required');
            if (yield this._isRemovingPlanUser()) {
                throw new Error400_1.default(this.options.language, 'user.errors.destroyingPlanUser');
            }
            if (this._isRemovingHimself()) {
                throw new Error400_1.default(this.options.language, 'user.errors.destroyingHimself');
            }
        });
    }
}
exports.default = UserDestroyer;
//# sourceMappingURL=userDestroyer.js.map