"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
class Storage {
    static get values() {
        return {
            userAvatarsProfiles: {
                id: 'userAvatarsProfiles',
                folder: 'user/avatars/profile/:userId',
                maxSizeInBytes: 10 * 1024 * 1024,
                bypassWritingPermissions: true,
                publicRead: true,
            },
            settingsLogos: {
                id: 'settingsLogos',
                folder: 'tenant/:tenantId/settings/logos',
                maxSizeInBytes: 10 * 1024 * 1024,
                publicRead: true,
            },
            settingsBackgroundImages: {
                id: 'settingsBackgroundImages',
                folder: 'tenant/:tenantId/settings/backgroundImages',
                maxSizeInBytes: 10 * 1024 * 1024,
                publicRead: true,
            },
            candidatesResume: {
                id: 'candidatesResume',
                folder: 'tenant/:tenantId/candidates/resume',
                maxSizeInBytes: 100 * 1024 * 1024,
            },
            candidatesPhoto: {
                id: 'candidatesPhoto',
                folder: 'tenant/:tenantId/candidates/photo',
                maxSizeInBytes: 100 * 1024 * 1024,
            },
        };
    }
}
exports.default = Storage;
//# sourceMappingURL=storage.js.map