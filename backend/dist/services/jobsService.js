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
const Error400_1 = __importDefault(require("../errors/Error400"));
const sequelizeRepository_1 = __importDefault(require("../database/repositories/sequelizeRepository"));
const jobsRepository_1 = __importDefault(require("../database/repositories/jobsRepository"));
const departmentsRepository_1 = __importDefault(require("../database/repositories/departmentsRepository"));
const leaveApplicationFormRepository_1 = __importDefault(require("../database/repositories/leaveApplicationFormRepository"));
const softSkillsRepository_1 = __importDefault(require("../database/repositories/softSkillsRepository"));
const userRepository_1 = __importDefault(require("../database/repositories/userRepository"));
class JobsService {
    constructor(options) {
        this.options = options;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                data.department = yield departmentsRepository_1.default.filterIdInTenant(data.department, Object.assign(Object.assign({}, this.options), { transaction }));
                data.supervisor = yield userRepository_1.default.filterIdInTenant(data.supervisor, Object.assign(Object.assign({}, this.options), { transaction }));
                data.leaves = yield leaveApplicationFormRepository_1.default.filterIdsInTenant(data.leaves, Object.assign(Object.assign({}, this.options), { transaction }));
                data.personalAndTechnicalSkills = yield softSkillsRepository_1.default.filterIdInTenant(data.personalAndTechnicalSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                const record = yield jobsRepository_1.default.create(data, Object.assign(Object.assign({}, this.options), { transaction }));
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return record;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                sequelizeRepository_1.default.handleUniqueFieldError(error, this.options.language, 'jobs');
                throw error;
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                data.department = yield departmentsRepository_1.default.filterIdInTenant(data.department, Object.assign(Object.assign({}, this.options), { transaction }));
                data.supervisor = yield userRepository_1.default.filterIdInTenant(data.supervisor, Object.assign(Object.assign({}, this.options), { transaction }));
                data.leaves = yield leaveApplicationFormRepository_1.default.filterIdsInTenant(data.leaves, Object.assign(Object.assign({}, this.options), { transaction }));
                data.personalAndTechnicalSkills = yield softSkillsRepository_1.default.filterIdInTenant(data.personalAndTechnicalSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                const record = yield jobsRepository_1.default.update(id, data, Object.assign(Object.assign({}, this.options), { transaction }));
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return record;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                sequelizeRepository_1.default.handleUniqueFieldError(error, this.options.language, 'jobs');
                throw error;
            }
        });
    }
    destroyAll(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                for (const id of ids) {
                    yield jobsRepository_1.default.destroy(id, Object.assign(Object.assign({}, this.options), { transaction }));
                }
                yield sequelizeRepository_1.default.commitTransaction(transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                throw error;
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return jobsRepository_1.default.findById(id, this.options);
        });
    }
    findAllAutocomplete(search, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return jobsRepository_1.default.findAllAutocomplete(search, limit, this.options);
        });
    }
    findAndCountAll(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return jobsRepository_1.default.findAndCountAll(args, this.options);
        });
    }
    import(data, importHash) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!importHash) {
                throw new Error400_1.default(this.options.language, 'importer.errors.importHashRequired');
            }
            if (yield this._isImportHashExistent(importHash)) {
                throw new Error400_1.default(this.options.language, 'importer.errors.importHashExistent');
            }
            const dataToCreate = Object.assign(Object.assign({}, data), { importHash });
            return this.create(dataToCreate);
        });
    }
    _isImportHashExistent(importHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield jobsRepository_1.default.count({
                importHash,
            }, this.options);
            return count > 0;
        });
    }
}
exports.default = JobsService;
//# sourceMappingURL=jobsService.js.map