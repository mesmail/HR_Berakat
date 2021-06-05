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
const aws = require('aws-sdk');
const s3 = new aws.S3({
    accessKeyId: config_1.getConfig().AWS_ACCESS_KEY_ID,
    secretAccessKey: config_1.getConfig().AWS_SECRET_ACCESS_KEY,
    region: config_1.getConfig().AWS_REGION,
});
class AWSStorage {
    /**
     * Creates a signed upload URL that enables
     * the frontend to upload directly to S3 in a
     * secure way
     */
    static uploadCredentials(privateUrl, maxSizeInBytes, publicRead, tokenExpiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const expires = tokenExpiresAt || Date.now() + 10 * 60 * 1000;
            const Conditions = [];
            if (maxSizeInBytes) {
                Conditions.push([
                    'content-length-range',
                    0,
                    maxSizeInBytes,
                ]);
            }
            let publicUrl;
            const Fields = { key: privateUrl };
            if (publicRead) {
                Fields.acl = 'public-read';
                Conditions.push({ acl: 'public-read' });
                publicUrl = yield this.downloadUrl(privateUrl, publicRead);
            }
            const policy = yield s3.createPresignedPost({
                Bucket: config_1.getConfig().FILE_STORAGE_BUCKET,
                Fields,
                Expires: tokenExpiresAt,
                Conditions,
            });
            return Object.assign(Object.assign({}, policy), { publicUrl });
        });
    }
    /**
     * Returns a signed download URL
     */
    static downloadUrl(privateUrl, publicRead) {
        return __awaiter(this, void 0, void 0, function* () {
            if (publicRead) {
                return `https://${config_1.getConfig().FILE_STORAGE_BUCKET}.s3.amazonaws.com/${privateUrl}`;
            }
            const params = {
                Key: privateUrl,
                Bucket: config_1.getConfig().FILE_STORAGE_BUCKET,
            };
            return yield s3.getSignedUrlPromise('getObject', params);
        });
    }
}
exports.default = AWSStorage;
//# sourceMappingURL=awsFileStorage.js.map