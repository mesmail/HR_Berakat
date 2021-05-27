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
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const storage_1 = require("@google-cloud/storage");
let bucket;
if (config_1.getConfig().GOOGLE_CLOUD_PLATFORM_CREDENTIALS) {
    const serviceAccount = JSON.parse(config_1.getConfig().GOOGLE_CLOUD_PLATFORM_CREDENTIALS);
    bucket = new storage_1.Storage({
        projectId: serviceAccount.project_id,
        credentials: serviceAccount,
    }).bucket(config_1.getConfig().FILE_STORAGE_BUCKET);
}
else {
    bucket = new storage_1.Storage().bucket(config_1.getConfig().FILE_STORAGE_BUCKET);
}
class GoogleCloudFileStorage {
    /**
     * Creates a signed upload URL that enables
     * the frontend to upload directly to GCS in a
     * secure way
     */
    static uploadCredentials(privateUrl, maxSizeInBytes, publicRead, tokenExpiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const expires = tokenExpiresAt || Date.now() + 10 * 60 * 1000;
            const file = bucket.file(privateUrl);
            const conditions = [];
            const fields = {};
            if (maxSizeInBytes) {
                conditions.push([
                    'content-length-range',
                    0,
                    maxSizeInBytes,
                ]);
            }
            let publicUrl;
            if (publicRead) {
                fields.acl = 'public-read';
                publicUrl = yield this.downloadUrl(privateUrl, publicRead);
            }
            const [policy] = yield file.generateSignedPostPolicyV4({
                expires,
                virtualHostedStyle: true,
                conditions,
                fields,
            });
            return Object.assign(Object.assign({}, policy), { publicUrl });
        });
    }
    /**
     * Returns a signed download URL.
     */
    static downloadUrl(privateUrl, publicRead, tokenExpiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (publicRead) {
                return `https://storage.googleapis.com/${config_1.getConfig().FILE_STORAGE_BUCKET}/${privateUrl}`;
            }
            tokenExpiresAt =
                tokenExpiresAt || Date.now() + 1000 * 60 * 60;
            const response = yield bucket
                .file(privateUrl)
                .getSignedUrl({
                action: 'read',
                expires: tokenExpiresAt,
                version: 'v4',
            });
            if (response && response[0]) {
                return response[0];
            }
            return response;
        });
    }
}
exports.default = GoogleCloudFileStorage;
//# sourceMappingURL=googleCloudFileStorage.js.map