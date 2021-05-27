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
const permissionChecker_1 = __importDefault(require("../../services/user/permissionChecker"));
const storage_1 = __importDefault(require("../../security/storage"));
const fileStorage_1 = __importDefault(require("../../services/file/fileStorage"));
const apiResponseHandler_1 = __importDefault(require("../apiResponseHandler"));
const Error403_1 = __importDefault(require("../../errors/Error403"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const permissionChecker = new permissionChecker_1.default(req);
        const filename = req.query.filename;
        const storageId = req.query.storageId;
        if (!req.currentUser || !req.currentUser.id) {
            throw new Error403_1.default();
        }
        if (!req.currentTenant || !req.currentTenant.id) {
            throw new Error403_1.default();
        }
        // The config storage has the information on where
        // to store the file and the max size
        const config = storage_1.default.values[storageId];
        if (!config) {
            throw new Error403_1.default();
        }
        if (
        // Some permissions are related to the user itself,
        // not related to any entity, that's why there is a bypass permissions
        !config.bypassWritingPermissions &&
            !permissionChecker.hasStorage(storageId)) {
            throw new Error403_1.default();
        }
        // The private URL is the path related to the bucket/file system folder
        let privateUrl = `${config.folder}/${filename}`;
        privateUrl = privateUrl.replace(':tenantId', req.currentTenant.id);
        privateUrl = privateUrl.replace(':userId', req.currentUser.id);
        const maxSizeInBytes = config.maxSizeInBytes;
        const publicRead = Boolean(config.publicRead);
        const downloadUrl = yield fileStorage_1.default.downloadUrl(privateUrl, publicRead);
        /**
         * Upload Credentials has the URL and the fields to be sent
         * to the upload server.
         */
        const uploadCredentials = yield fileStorage_1.default.uploadCredentials(privateUrl, maxSizeInBytes, publicRead);
        yield apiResponseHandler_1.default.success(req, res, {
            privateUrl,
            downloadUrl,
            uploadCredentials,
        });
    }
    catch (error) {
        yield apiResponseHandler_1.default.error(req, res, error);
    }
});
//# sourceMappingURL=credentials.js.map