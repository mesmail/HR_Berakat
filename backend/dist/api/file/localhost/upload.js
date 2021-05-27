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
const formidable_serverless_1 = __importDefault(require("formidable-serverless"));
const fs_1 = __importDefault(require("fs"));
const apiResponseHandler_1 = __importDefault(require("../../apiResponseHandler"));
const Error403_1 = __importDefault(require("../../../errors/Error403"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config");
const fileStorage_1 = __importDefault(require("../../../services/file/fileStorage"));
/**
 * Uploads a file to the localhost.
 */
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.token) {
        return apiResponseHandler_1.default.error(req, res, new Error403_1.default());
    }
    let storage;
    try {
        storage = jsonwebtoken_1.default.verify(req.query.token, config_1.getConfig().AUTH_JWT_SECRET);
    }
    catch (error) {
        console.error(error);
        return apiResponseHandler_1.default.error(req, res, new Error403_1.default());
    }
    let { privateUrl, maxSizeInBytes } = storage;
    const form = new formidable_serverless_1.default.IncomingForm();
    form.maxFileSize = Number(maxSizeInBytes);
    form.parse(req, function (err, fields, files) {
        const filename = String(fields.filename);
        const fileTempUrl = files.file.path;
        if (!filename) {
            fs_1.default.unlinkSync(fileTempUrl);
            return apiResponseHandler_1.default.error(req, res, new Error(`File not found`));
        }
        fileStorage_1.default.upload(fileTempUrl, privateUrl)
            .then((downloadUrl) => {
            return apiResponseHandler_1.default.success(req, res, downloadUrl);
        })
            .catch((error) => {
            return apiResponseHandler_1.default.error(req, res, error);
        });
    });
    form.on('error', function (error) {
        return apiResponseHandler_1.default.error(req, res, error);
    });
});
//# sourceMappingURL=upload.js.map