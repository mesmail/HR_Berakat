"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This module creates the Sequelize to the database and
 * exports all the models.
 */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = __importStar(require("sequelize"));
const config_1 = require("../../config");
const highlight = require('cli-highlight').highlight;
const basename = path_1.default.basename(module.filename);
function models() {
    const database = {};
    let sequelize = new sequelize_1.default(config_1.getConfig().DATABASE_DATABASE, config_1.getConfig().DATABASE_USERNAME, config_1.getConfig().DATABASE_PASSWORD, {
        host: config_1.getConfig().DATABASE_HOST,
        dialect: config_1.getConfig().DATABASE_DIALECT,
        logging: config_1.getConfig().DATABASE_LOGGING === 'true'
            ? (log) => console.log(highlight(log, {
                language: 'sql',
                ignoreIllegals: true,
            }))
            : false,
    });
    fs_1.default.readdirSync(__dirname)
        .filter(function (file) {
        return (file.indexOf('.') !== 0 &&
            file !== basename &&
            (file.slice(-3) === '.js' ||
                file.slice(-3) === '.ts'));
    })
        .forEach(function (file) {
        const model = require(path_1.default.join(__dirname, file)).default(sequelize, sequelize_1.DataTypes);
        database[model.name] = model;
    });
    Object.keys(database).forEach(function (modelName) {
        if (database[modelName].associate) {
            database[modelName].associate(database);
        }
    });
    database.sequelize = sequelize;
    database.Sequelize = sequelize_1.default;
    return database;
}
exports.default = models;
//# sourceMappingURL=index.js.map