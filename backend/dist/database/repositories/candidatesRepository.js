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
const auditLogRepository_1 = __importDefault(require("../../database/repositories/auditLogRepository"));
const lodash_1 = __importDefault(require("lodash"));
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const Error404_1 = __importDefault(require("../../errors/Error404"));
const sequelize_1 = __importDefault(require("sequelize"));
const fileRepository_1 = __importDefault(require("./fileRepository"));
const Op = sequelize_1.default.Op;
class CandidatesRepository {
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.candidates.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'candidateName',
                'candidateReference',
                'gender',
                'currentCompany',
                'noticePeriod',
                'currentSalary',
                'expectedSalary',
                'candidateCreatedDate',
                'tactLevel',
                'yearsExperience',
                'importHash',
            ])), { currentPositionId: data.currentPosition || null, academicCertificateSpecializationId: data.academicCertificateSpecialization || null, trainingCertificatesId: data.trainingCertificates || null, softSkillsId: data.softSkills || null, managementSkillsId: data.managementSkills || null, artisticSkillsId: data.artisticSkills || null, jobsId: data.jobs || null, tenantId: tenant.id, createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.candidates.getTableName(),
                belongsToColumn: 'resume',
                belongsToId: record.id,
            }, data.resume, options);
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.candidates.getTableName(),
                belongsToColumn: 'photo',
                belongsToId: record.id,
            }, data.photo, options);
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.candidates.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            record = yield record.update(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'candidateName',
                'candidateReference',
                'gender',
                'currentCompany',
                'noticePeriod',
                'currentSalary',
                'expectedSalary',
                'candidateCreatedDate',
                'tactLevel',
                'yearsExperience',
                'importHash',
            ])), { currentPositionId: data.currentPosition || null, academicCertificateSpecializationId: data.academicCertificateSpecialization || null, trainingCertificatesId: data.trainingCertificates || null, softSkillsId: data.softSkills || null, managementSkillsId: data.managementSkills || null, artisticSkillsId: data.artisticSkills || null, jobsId: data.jobs || null, updatedById: currentUser.id }), {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.candidates.getTableName(),
                belongsToColumn: 'resume',
                belongsToId: record.id,
            }, data.resume, options);
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.candidates.getTableName(),
                belongsToColumn: 'photo',
                belongsToId: record.id,
            }, data.photo, options);
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.candidates.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            yield record.destroy({
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.DELETE, record, record, options);
        });
    }
    static findById(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const include = [
                {
                    model: options.database.jobs,
                    as: 'currentPosition',
                },
                {
                    model: options.database.academicCertificates,
                    as: 'academicCertificateSpecialization',
                },
                {
                    model: options.database.trainingCertificates,
                    as: 'trainingCertificates',
                },
                {
                    model: options.database.softSkills,
                    as: 'softSkills',
                },
                {
                    model: options.database.managementSkills,
                    as: 'managementSkills',
                },
                {
                    model: options.database.artisticSkills,
                    as: 'artisticSkills',
                },
                {
                    model: options.database.jobs,
                    as: 'jobs',
                },
            ];
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const record = yield options.database.candidates.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                include,
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static filterIdInTenant(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return lodash_1.default.get(yield this.filterIdsInTenant([id], options), '[0]', null);
        });
    }
    static filterIdsInTenant(ids, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ids || !ids.length) {
                return [];
            }
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const where = {
                id: {
                    [Op.in]: ids,
                },
                tenantId: currentTenant.id,
            };
            const records = yield options.database.candidates.findAll({
                attributes: ['id'],
                where,
            });
            return records.map((record) => record.id);
        });
    }
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            return options.database.candidates.count({
                where: Object.assign(Object.assign({}, filter), { tenantId: tenant.id }),
                transaction,
            });
        });
    }
    static findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [];
            let include = [
                {
                    model: options.database.jobs,
                    as: 'currentPosition',
                },
                {
                    model: options.database.academicCertificates,
                    as: 'academicCertificateSpecialization',
                },
                {
                    model: options.database.trainingCertificates,
                    as: 'trainingCertificates',
                },
                {
                    model: options.database.softSkills,
                    as: 'softSkills',
                },
                {
                    model: options.database.managementSkills,
                    as: 'managementSkills',
                },
                {
                    model: options.database.artisticSkills,
                    as: 'artisticSkills',
                },
                {
                    model: options.database.jobs,
                    as: 'jobs',
                },
            ];
            whereAnd.push({
                tenantId: tenant.id,
            });
            if (filter) {
                if (filter.id) {
                    whereAnd.push({
                        ['id']: sequelizeFilterUtils_1.default.uuid(filter.id),
                    });
                }
                if (filter.candidateName) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('candidates', 'candidateName', filter.candidateName));
                }
                if (filter.currentPosition) {
                    whereAnd.push({
                        ['currentPositionId']: sequelizeFilterUtils_1.default.uuid(filter.currentPosition),
                    });
                }
                if (filter.candidateReference) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('candidates', 'candidateReference', filter.candidateReference));
                }
                if (filter.gender) {
                    whereAnd.push({
                        gender: filter.gender,
                    });
                }
                if (filter.academicCertificateSpecialization) {
                    whereAnd.push({
                        ['academicCertificateSpecializationId']: sequelizeFilterUtils_1.default.uuid(filter.academicCertificateSpecialization),
                    });
                }
                if (filter.trainingCertificates) {
                    whereAnd.push({
                        ['trainingCertificatesId']: sequelizeFilterUtils_1.default.uuid(filter.trainingCertificates),
                    });
                }
                if (filter.currentCompany) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('candidates', 'currentCompany', filter.currentCompany));
                }
                if (filter.noticePeriodRange) {
                    const [start, end] = filter.noticePeriodRange;
                    if (start !== undefined && start !== null && start !== '') {
                        whereAnd.push({
                            noticePeriod: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        whereAnd.push({
                            noticePeriod: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
                if (filter.currentSalaryRange) {
                    const [start, end] = filter.currentSalaryRange;
                    if (start !== undefined && start !== null && start !== '') {
                        whereAnd.push({
                            currentSalary: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        whereAnd.push({
                            currentSalary: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
                if (filter.expectedSalaryRange) {
                    const [start, end] = filter.expectedSalaryRange;
                    if (start !== undefined && start !== null && start !== '') {
                        whereAnd.push({
                            expectedSalary: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        whereAnd.push({
                            expectedSalary: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
                if (filter.softSkills) {
                    whereAnd.push({
                        ['softSkillsId']: sequelizeFilterUtils_1.default.uuid(filter.softSkills),
                    });
                }
                if (filter.managementSkills) {
                    whereAnd.push({
                        ['managementSkillsId']: sequelizeFilterUtils_1.default.uuid(filter.managementSkills),
                    });
                }
                if (filter.artisticSkills) {
                    whereAnd.push({
                        ['artisticSkillsId']: sequelizeFilterUtils_1.default.uuid(filter.artisticSkills),
                    });
                }
                if (filter.candidateCreatedDateRange) {
                    const [start, end] = filter.candidateCreatedDateRange;
                    if (start !== undefined && start !== null && start !== '') {
                        whereAnd.push({
                            candidateCreatedDate: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        whereAnd.push({
                            candidateCreatedDate: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
                if (filter.jobs) {
                    whereAnd.push({
                        ['jobsId']: sequelizeFilterUtils_1.default.uuid(filter.jobs),
                    });
                }
                if (filter.createdAtRange) {
                    const [start, end] = filter.createdAtRange;
                    if (start !== undefined &&
                        start !== null &&
                        start !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined &&
                        end !== null &&
                        end !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
            }
            const where = { [Op.and]: whereAnd };
            let { rows, count, } = yield options.database.candidates.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['createdAt', 'DESC']],
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            rows = yield this._fillWithRelationsAndFilesForRows(rows, options);
            return { rows, count };
        });
    }
    static findAllAutocomplete(query, limit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [{
                    tenantId: tenant.id,
                }];
            if (query) {
                whereAnd.push({
                    [Op.or]: [
                        { ['id']: sequelizeFilterUtils_1.default.uuid(query) },
                        {
                            [Op.and]: sequelizeFilterUtils_1.default.ilikeIncludes('candidates', 'candidateName', query),
                        },
                    ],
                });
            }
            const where = { [Op.and]: whereAnd };
            const records = yield options.database.candidates.findAll({
                attributes: ['id', 'candidateName'],
                where,
                limit: limit ? Number(limit) : undefined,
                order: [['candidateName', 'ASC']],
            });
            return records.map((record) => ({
                id: record.id,
                label: record.candidateName,
            }));
        });
    }
    static _createAuditLog(action, record, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = {};
            if (data) {
                values = Object.assign(Object.assign({}, record.get({ plain: true })), { resume: data.resume, photo: data.photo });
            }
            yield auditLogRepository_1.default.log({
                entityName: 'candidates',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
    static _fillWithRelationsAndFilesForRows(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!rows) {
                return rows;
            }
            return Promise.all(rows.map((record) => this._fillWithRelationsAndFiles(record, options)));
        });
    }
    static _fillWithRelationsAndFiles(record, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return record;
            }
            const output = record.get({ plain: true });
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            output.resume = yield fileRepository_1.default.fillDownloadUrl(yield record.getResume({
                transaction,
            }));
            output.photo = yield fileRepository_1.default.fillDownloadUrl(yield record.getPhoto({
                transaction,
            }));
            return output;
        });
    }
}
exports.default = CandidatesRepository;
//# sourceMappingURL=candidatesRepository.js.map