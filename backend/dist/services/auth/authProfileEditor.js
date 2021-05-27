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
const userRepository_1 = __importDefault(require("../../database/repositories/userRepository"));
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
class AuthProfileEditor {
    constructor(options) {
        this.options = options;
        this.transaction = null;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = data;
            yield this._validate();
            try {
                this.transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
                yield userRepository_1.default.updateProfile(this.options.currentUser.id, this.data, Object.assign(Object.assign({}, this.options), { bypassPermissionValidation: true }));
                yield sequelizeRepository_1.default.commitTransaction(this.transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(this.transaction);
                throw error;
            }
        });
    }
    _validate() {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default(this.options.currentUser, 'currentUser is required');
            assert_1.default(this.options.currentUser.id, 'currentUser.id is required');
            assert_1.default(this.options.currentUser.email, 'currentUser.email is required');
            assert_1.default(this.data, 'profile is required');
        });
    }
}
exports.default = AuthProfileEditor;
//# sourceMappingURL=authProfileEditor.js.map