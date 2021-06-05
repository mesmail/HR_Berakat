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
const Error400_1 = __importDefault(require("../../errors/Error400"));
const lodash_1 = __importDefault(require("lodash"));
const sequelize_1 = require("sequelize");
/**
 * Abstracts some basic Sequelize operations.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class SequelizeRepository {
    /**
     * Cleans the database.
     */
    static cleanDatabase(database) {
        return __awaiter(this, void 0, void 0, function* () {
            if (process.env.NODE_ENV !== 'test') {
                throw new Error('Clean database only allowed for test!');
            }
            yield database.sequelize.sync({ force: true });
        });
    }
    /**
     * Returns the currentUser if it exists on the options.
     */
    static getCurrentUser(options) {
        return (options && options.currentUser) || { id: null };
    }
    /**
     * Returns the tenant if it exists on the options.
     */
    static getCurrentTenant(options) {
        return ((options && options.currentTenant) || { id: null });
    }
    /**
     * Returns the transaction if it exists on the options.
     */
    static getTransaction(options) {
        return (options && options.transaction) || undefined;
    }
    /**
     * Creates a database transaction.
     */
    static createTransaction(database) {
        return __awaiter(this, void 0, void 0, function* () {
            return database.sequelize.transaction();
        });
    }
    /**
     * Commits a database transaction.
     */
    static commitTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return transaction.commit();
        });
    }
    /**
     * Rolls back a database transaction.
     */
    static rollbackTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return transaction.rollback();
        });
    }
    static handleUniqueFieldError(error, language, entityName) {
        if (!(error instanceof sequelize_1.UniqueConstraintError)) {
            return;
        }
        const fieldName = lodash_1.default.get(error, 'errors[0].path');
        throw new Error400_1.default(language, `entities.${entityName}.errors.unique.${fieldName}`);
    }
}
exports.default = SequelizeRepository;
//# sourceMappingURL=sequelizeRepository.js.map