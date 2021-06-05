"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const uuid_1 = require("uuid");
const sequelize_1 = __importDefault(require("sequelize"));
/**
 * Utilities to use on Sequelize queries.
 */
class SequelizeFilterUtils {
    /**
     * If you pass an invalid uuid to a query, it throws an exception.
     * To hack this behaviour, if the uuid is invalid, it creates a new one,
     * that won't match any of the database.
     * If the uuid is invalid, brings no results.
     */
    static uuid(value) {
        let id = value;
        // If ID is invalid, sequelize throws an error.
        // For that not to happen, if the UUID is invalid, it sets
        // some random uuid
        if (!validator_1.default.isUUID(id)) {
            id = uuid_1.v4();
        }
        return id;
    }
    /**
     * Creates an ilike condition.
     */
    static ilikeIncludes(model, column, value) {
        return sequelize_1.default.where(sequelize_1.default.fn('lower', sequelize_1.default.col(`${model}.${column}`)), {
            [sequelize_1.default.Op.like]: `%${value}%`.toLowerCase(),
        });
    }
    static ilikeExact(model, column, value) {
        return sequelize_1.default.where(sequelize_1.default.fn('lower', sequelize_1.default.col(`${model}.${column}`)), {
            [sequelize_1.default.Op.like]: (value || '').toLowerCase(),
        });
    }
}
exports.default = SequelizeFilterUtils;
//# sourceMappingURL=sequelizeFilterUtils.js.map