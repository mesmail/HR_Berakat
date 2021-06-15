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
const academicCertificatesRepository_1 = __importDefault(require("../database/repositories/academicCertificatesRepository"));
const trainingCertificatesRepository_1 = __importDefault(require("../database/repositories/trainingCertificatesRepository"));
const professionalCertificationsRepository_1 = __importDefault(require("../database/repositories/professionalCertificationsRepository"));
const softSkillsRepository_1 = __importDefault(require("../database/repositories/softSkillsRepository"));
const managementSkillsRepository_1 = __importDefault(require("../database/repositories/managementSkillsRepository"));
const artisticSkillsRepository_1 = __importDefault(require("../database/repositories/artisticSkillsRepository"));
const jobFrameworksRepository_1 = __importDefault(require("../database/repositories/jobFrameworksRepository"));
const connectionLevelRepository_1 = __importDefault(require("../database/repositories/connectionLevelRepository"));
const commonComiteesRepository_1 = __importDefault(require("../database/repositories/commonComiteesRepository"));
const jobRequirmentsRepository_1 = __importDefault(require("../database/repositories/jobRequirmentsRepository"));
const jobPathRepository_1 = __importDefault(require("../database/repositories/jobPathRepository"));
const tasksDutiesRepository_1 = __importDefault(require("../database/repositories/tasksDutiesRepository"));
const administrativeFinancialPowersRepository_1 = __importDefault(require("../database/repositories/administrativeFinancialPowersRepository"));
const cardInformationRepository_1 = __importDefault(require("../database/repositories/cardInformationRepository"));
const userRepository_1 = __importDefault(require("../database/repositories/userRepository"));
class JobsService {
    constructor(options) {
        this.options = options;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                data.department = yield departmentsRepository_1.default.filterIdsInTenant(data.department, Object.assign(Object.assign({}, this.options), { transaction }));
                data.supervisor = yield userRepository_1.default.filterIdInTenant(data.supervisor, Object.assign(Object.assign({}, this.options), { transaction }));
                data.academicCertificates = yield academicCertificatesRepository_1.default.filterIdInTenant(data.academicCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.trainingCertificates = yield trainingCertificatesRepository_1.default.filterIdInTenant(data.trainingCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.professionalCertificates = yield professionalCertificationsRepository_1.default.filterIdInTenant(data.professionalCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.softSkills = yield softSkillsRepository_1.default.filterIdInTenant(data.softSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.managementSkills = yield managementSkillsRepository_1.default.filterIdInTenant(data.managementSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.artitistikSkills = yield artisticSkillsRepository_1.default.filterIdInTenant(data.artitistikSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobFramework = yield jobFrameworksRepository_1.default.filterIdInTenant(data.jobFramework, Object.assign(Object.assign({}, this.options), { transaction }));
                data.connectionLevel = yield connectionLevelRepository_1.default.filterIdInTenant(data.connectionLevel, Object.assign(Object.assign({}, this.options), { transaction }));
                data.commonCommittees = yield commonComiteesRepository_1.default.filterIdsInTenant(data.commonCommittees, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobRequirments = yield jobRequirmentsRepository_1.default.filterIdInTenant(data.jobRequirments, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobPath = yield jobPathRepository_1.default.filterIdInTenant(data.jobPath, Object.assign(Object.assign({}, this.options), { transaction }));
                data.tasksDuties = yield tasksDutiesRepository_1.default.filterIdInTenant(data.tasksDuties, Object.assign(Object.assign({}, this.options), { transaction }));
                data.administrativeFinancialPowers = yield administrativeFinancialPowersRepository_1.default.filterIdInTenant(data.administrativeFinancialPowers, Object.assign(Object.assign({}, this.options), { transaction }));
                data.cardInformation = yield cardInformationRepository_1.default.filterIdInTenant(data.cardInformation, Object.assign(Object.assign({}, this.options), { transaction }));
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
                data.department = yield departmentsRepository_1.default.filterIdsInTenant(data.department, Object.assign(Object.assign({}, this.options), { transaction }));
                data.supervisor = yield userRepository_1.default.filterIdInTenant(data.supervisor, Object.assign(Object.assign({}, this.options), { transaction }));
                data.academicCertificates = yield academicCertificatesRepository_1.default.filterIdInTenant(data.academicCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.trainingCertificates = yield trainingCertificatesRepository_1.default.filterIdInTenant(data.trainingCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.professionalCertificates = yield professionalCertificationsRepository_1.default.filterIdInTenant(data.professionalCertificates, Object.assign(Object.assign({}, this.options), { transaction }));
                data.softSkills = yield softSkillsRepository_1.default.filterIdInTenant(data.softSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.managementSkills = yield managementSkillsRepository_1.default.filterIdInTenant(data.managementSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.artitistikSkills = yield artisticSkillsRepository_1.default.filterIdInTenant(data.artitistikSkills, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobFramework = yield jobFrameworksRepository_1.default.filterIdInTenant(data.jobFramework, Object.assign(Object.assign({}, this.options), { transaction }));
                data.connectionLevel = yield connectionLevelRepository_1.default.filterIdInTenant(data.connectionLevel, Object.assign(Object.assign({}, this.options), { transaction }));
                data.commonCommittees = yield commonComiteesRepository_1.default.filterIdsInTenant(data.commonCommittees, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobRequirments = yield jobRequirmentsRepository_1.default.filterIdInTenant(data.jobRequirments, Object.assign(Object.assign({}, this.options), { transaction }));
                data.jobPath = yield jobPathRepository_1.default.filterIdInTenant(data.jobPath, Object.assign(Object.assign({}, this.options), { transaction }));
                data.tasksDuties = yield tasksDutiesRepository_1.default.filterIdInTenant(data.tasksDuties, Object.assign(Object.assign({}, this.options), { transaction }));
                data.administrativeFinancialPowers = yield administrativeFinancialPowersRepository_1.default.filterIdInTenant(data.administrativeFinancialPowers, Object.assign(Object.assign({}, this.options), { transaction }));
                data.cardInformation = yield cardInformationRepository_1.default.filterIdInTenant(data.cardInformation, Object.assign(Object.assign({}, this.options), { transaction }));
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