"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This script is responsible for create the SQL tables.
 * Run it via `npm run db:create`.
 */
require('dotenv').config();
const models_1 = __importDefault(require("../models"));
models_1.default()
    .sequelize.sync()
    .then(() => {
    console.log('OK');
    process.exit();
})
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=create.js.map