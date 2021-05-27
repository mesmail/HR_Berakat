"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Starts the application on the port specified.
 */
require('dotenv').config();
const api_1 = __importDefault(require("./api"));
const PORT = process.env.PORT || 8080;
api_1.default.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map