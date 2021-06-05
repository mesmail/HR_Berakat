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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config");
const mv_1 = __importDefault(require("mv"));
/**
 * The directory where the files should be uploaded.
 * Change this to a persisted folder.
 */
const UPLOAD_DIR = os_1.default.tmpdir();
class LocalFileStorage {
    /**
     * Creates a signed upload URL that enables
     * the frontend to upload directly to the server in a
     * secure way.
     */
    static uploadCredentials(privateUrl, maxSizeInBytes, publicRead, tokenExpiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const expires = tokenExpiresAt || Date.now() + 10 * 60 * 1000;
            const token = jsonwebtoken_1.default.sign({ privateUrl, maxSizeInBytes }, config_1.getConfig().AUTH_JWT_SECRET, { expiresIn: expires });
            return {
                url: `${config_1.getConfig().BACKEND_URL}/file/upload?token=${token}`,
            };
        });
    }
    /**
     * Handles the upload to the server.
     */
    static upload(fileTempUrl, privateUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const internalUrl = path_1.default.join(UPLOAD_DIR, privateUrl);
            ensureDirectoryExistence(internalUrl);
            return new Promise((resolve, reject) => {
                mv_1.default(fileTempUrl, internalUrl, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    return this.downloadUrl(privateUrl)
                        .then(resolve)
                        .catch(reject);
                });
            });
        });
    }
    /**
     * Return the download URL of the file from this server.
     */
    static downloadUrl(privateUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return `${config_1.getConfig().BACKEND_URL}/file/download?privateUrl=${privateUrl}`;
        });
    }
    /**
     * Downloads the file.
     */
    static download(privateUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return path_1.default.join(UPLOAD_DIR, privateUrl);
        });
    }
}
exports.default = LocalFileStorage;
function ensureDirectoryExistence(filePath) {
    var dirname = path_1.default.dirname(filePath);
    if (fs_1.default.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs_1.default.mkdirSync(dirname);
}
//# sourceMappingURL=localhostFileStorage.js.map