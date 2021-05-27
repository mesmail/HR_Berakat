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
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const assert_1 = __importDefault(require("assert"));
const fileStorage_1 = __importDefault(require("../../services/file/fileStorage"));
class FileRepository {
    static fillDownloadUrl(files) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!files) {
                return files;
            }
            return yield Promise.all(files.map((file) => __awaiter(this, void 0, void 0, function* () {
                let downloadUrl;
                if (file.publicUrl) {
                    downloadUrl = file.publicUrl;
                }
                else {
                    downloadUrl = yield fileStorage_1.default.downloadUrl(file.privateUrl);
                }
                return Object.assign(Object.assign({}, file.get({ plain: true })), { downloadUrl });
            })));
        });
    }
    /**
     * Updates the file list for some record.
     */
    static replaceRelationFiles(relation, rawFiles, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this._validateReplaceRelationFiles(relation, options);
            const files = this._normalizeFiles(rawFiles);
            yield this._removeLegacyFiles(relation, files, options);
            yield this._addFiles(relation, files, options);
        });
    }
    /**
     * Transforms the files into an array if it's an object.
     */
    static _normalizeFiles(rawFiles = []) {
        let files = [];
        if (Array.isArray(rawFiles)) {
            files = rawFiles;
        }
        else {
            files = rawFiles ? [rawFiles] : [];
        }
        return files;
    }
    /**
     * Validates required data for files.
     */
    static _validateReplaceRelationFiles(relation, options) {
        assert_1.default(relation.belongsTo, 'belongsTo is required');
        assert_1.default(relation.belongsToColumn, 'belongsToColumn is required');
        assert_1.default(relation.belongsToId, 'belongsToId is required');
    }
    /**
     * Filter file ids that already exists on the database.
     */
    static _existingFilesIds(files) {
        return files
            .filter((file) => !file.new)
            .map((file) => file.id);
    }
    /**
     * Creates the new files on the database.
     */
    static _addFiles(relation, files, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const inexistentFiles = files.filter((file) => Boolean(file.new));
            for (const file of inexistentFiles) {
                yield options.database.file.create({
                    belongsTo: relation.belongsTo,
                    belongsToColumn: relation.belongsToColumn,
                    belongsToId: relation.belongsToId,
                    name: file.name,
                    sizeInBytes: file.sizeInBytes,
                    privateUrl: file.privateUrl,
                    publicUrl: file.publicUrl,
                    tenantId: currentTenant.id,
                    createdById: currentUser.id,
                    updatedById: currentUser.id,
                }, {
                    transaction,
                });
            }
        });
    }
    /**
     * Remove files that don't exist on the new list.
     */
    static _removeLegacyFiles(relation, files, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const filesToDelete = yield options.database.file.findAll({
                where: {
                    belongsTo: relation.belongsTo,
                    belongsToId: relation.belongsToId,
                    belongsToColumn: relation.belongsToColumn,
                    id: {
                        [options.database.Sequelize.Op
                            .notIn]: this._existingFilesIds(files),
                    },
                },
                transaction,
            });
            for (let file of filesToDelete) {
                yield file.destroy({
                    transaction,
                });
            }
        });
    }
}
exports.default = FileRepository;
//# sourceMappingURL=fileRepository.js.map