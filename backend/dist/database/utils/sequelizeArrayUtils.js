"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
class SequelizeArrayUtils {
    // MySQL doesn't have Array Field
    static get DataType() {
        return config_1.getConfig().DATABASE_DIALECT === 'mysql'
            ? sequelize_1.DataTypes.JSON
            : sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT);
    }
    static filter(tableName, fieldName, filterValue) {
        const filterValueAsArray = Array.isArray(filterValue)
            ? filterValue
            : [filterValue];
        if (config_1.getConfig().DATABASE_DIALECT === 'mysql') {
            return {
                [sequelize_2.default.Op
                    .and]: filterValueAsArray.map((filterValue) => arrayContainsForMySQL(tableName, fieldName, filterValue)),
            };
        }
        else {
            return {
                [fieldName]: {
                    [sequelize_2.default.Op.contains]: filterValueAsArray,
                },
            };
        }
    }
}
exports.default = SequelizeArrayUtils;
function arrayContainsForMySQL(model, column, value) {
    return sequelize_2.default.fn('JSON_CONTAINS', sequelize_2.default.col(`${model}.${column}`), `"${value}"`);
}
//# sourceMappingURL=sequelizeArrayUtils.js.map