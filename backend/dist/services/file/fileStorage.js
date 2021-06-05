"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
let FileStorage;
if (config_1.getConfig().FILE_STORAGE_PROVIDER === 'gcp') {
    FileStorage = require('./googleCloudFileStorage').default;
}
if (config_1.getConfig().FILE_STORAGE_PROVIDER === 'aws') {
    FileStorage = require('./awsFileStorage').default;
}
if (config_1.getConfig().FILE_STORAGE_PROVIDER === 'localhost') {
    FileStorage = require('./localhostFileStorage').default;
}
exports.default = FileStorage;
//# sourceMappingURL=fileStorage.js.map