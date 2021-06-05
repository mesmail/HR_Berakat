import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';import FileRepository from './fileRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class CandidatesRepository {

  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.candidates.create(
      {
        ...lodash.pick(data, [
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
        ]),
        currentPositionId: data.currentPosition || null,
        academicCertificateSpecializationId: data.academicCertificateSpecialization || null,
        trainingCertificatesId: data.trainingCertificates || null,
        softSkillsId: data.softSkills || null,
        managementSkillsId: data.managementSkills || null,
        artisticSkillsId: data.artisticSkills || null,
        jobsId: data.jobs || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.candidates.getTableName(),
        belongsToColumn: 'resume',
        belongsToId: record.id,
      },
      data.resume,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.candidates.getTableName(),
        belongsToColumn: 'photo',
        belongsToId: record.id,
      },
      data.photo,
      options,
    );
  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );


    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.candidates.findOne(      
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
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
        ]),
        currentPositionId: data.currentPosition || null,
        academicCertificateSpecializationId: data.academicCertificateSpecialization || null,
        trainingCertificatesId: data.trainingCertificates || null,
        softSkillsId: data.softSkills || null,
        managementSkillsId: data.managementSkills || null,
        artisticSkillsId: data.artisticSkills || null,
        jobsId: data.jobs || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );



    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.candidates.getTableName(),
        belongsToColumn: 'resume',
        belongsToId: record.id,
      },
      data.resume,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.candidates.getTableName(),
        belongsToColumn: 'photo',
        belongsToId: record.id,
      },
      data.photo,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.candidates.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

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

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.candidates.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include,
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      SequelizeRepository.getCurrentTenant(options);

    const where = {
      id: {
        [Op.in]: ids,
      },
      tenantId: currentTenant.id,
    };

    const records = await options.database.candidates.findAll(
      {
        attributes: ['id'],
        where,
      },
    );

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.candidates.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
        transaction,
      },
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
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
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.candidateName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'candidates',
            'candidateName',
            filter.candidateName,
          ),
        );
      }

      if (filter.currentPosition) {
        whereAnd.push({
          ['currentPositionId']: SequelizeFilterUtils.uuid(
            filter.currentPosition,
          ),
        });
      }

      if (filter.candidateReference) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'candidates',
            'candidateReference',
            filter.candidateReference,
          ),
        );
      }

      if (filter.gender) {
        whereAnd.push({
          gender: filter.gender,
        });
      }

      if (filter.academicCertificateSpecialization) {
        whereAnd.push({
          ['academicCertificateSpecializationId']: SequelizeFilterUtils.uuid(
            filter.academicCertificateSpecialization,
          ),
        });
      }

      if (filter.trainingCertificates) {
        whereAnd.push({
          ['trainingCertificatesId']: SequelizeFilterUtils.uuid(
            filter.trainingCertificates,
          ),
        });
      }

      if (filter.currentCompany) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'candidates',
            'currentCompany',
            filter.currentCompany,
          ),
        );
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
          ['softSkillsId']: SequelizeFilterUtils.uuid(
            filter.softSkills,
          ),
        });
      }

      if (filter.managementSkills) {
        whereAnd.push({
          ['managementSkillsId']: SequelizeFilterUtils.uuid(
            filter.managementSkills,
          ),
        });
      }

      if (filter.artisticSkills) {
        whereAnd.push({
          ['artisticSkillsId']: SequelizeFilterUtils.uuid(
            filter.artisticSkills,
          ),
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
          ['jobsId']: SequelizeFilterUtils.uuid(
            filter.jobs,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.candidates.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilikeIncludes(
              'candidates',
              'candidateName',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.candidates.findAll(
      {
        attributes: ['id', 'candidateName'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['candidateName', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.candidateName,
    }));
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
        resume: data.resume,
        photo: data.photo,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'candidates',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.resume = await FileRepository.fillDownloadUrl(
      await record.getResume({
        transaction,
      }),
    );

    output.photo = await FileRepository.fillDownloadUrl(
      await record.getPhoto({
        transaction,
      }),
    );

    return output;
  }
}

export default CandidatesRepository;
