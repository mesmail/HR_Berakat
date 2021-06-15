import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';import UserRepository from './userRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class JobsRepository {

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

    const record = await options.database.jobs.create(
      {
        ...lodash.pick(data, [
          'positionName',
          'jobLocation',
          'jobCode',
          'generalDescription',
          'generalGoals',
          'detailedGoals',          
          'importHash',
        ]),
        supervisorId: data.supervisor || null,
        academicCertificatesId: data.academicCertificates || null,
        trainingCertificatesId: data.trainingCertificates || null,
        professionalCertificatesId: data.professionalCertificates || null,
        softSkillsId: data.softSkills || null,
        managementSkillsId: data.managementSkills || null,
        artitistikSkillsId: data.artitistikSkills || null,
        jobFrameworkId: data.jobFramework || null,
        connectionLevelId: data.connectionLevel || null,
        jobRequirmentsId: data.jobRequirments || null,
        jobPathId: data.jobPath || null,
        tasksDutiesId: data.tasksDuties || null,
        administrativeFinancialPowersId: data.administrativeFinancialPowers || null,
        cardInformationId: data.cardInformation || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setDepartment(data.department || [], {
      transaction,
    });
    await record.setCommonCommittees(data.commonCommittees || [], {
      transaction,
    });    
  

  
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

    let record = await options.database.jobs.findOne(      
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
          'positionName',
          'jobLocation',
          'jobCode',
          'generalDescription',
          'generalGoals',
          'detailedGoals',          
          'importHash',
        ]),
        supervisorId: data.supervisor || null,
        academicCertificatesId: data.academicCertificates || null,
        trainingCertificatesId: data.trainingCertificates || null,
        professionalCertificatesId: data.professionalCertificates || null,
        softSkillsId: data.softSkills || null,
        managementSkillsId: data.managementSkills || null,
        artitistikSkillsId: data.artitistikSkills || null,
        jobFrameworkId: data.jobFramework || null,
        connectionLevelId: data.connectionLevel || null,
        jobRequirmentsId: data.jobRequirments || null,
        jobPathId: data.jobPath || null,
        tasksDutiesId: data.tasksDuties || null,
        administrativeFinancialPowersId: data.administrativeFinancialPowers || null,
        cardInformationId: data.cardInformation || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setDepartment(data.department || [], {
      transaction,
    });
    await record.setCommonCommittees(data.commonCommittees || [], {
      transaction,
    });



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

    let record = await options.database.jobs.findOne(
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
        model: options.database.user,
        as: 'supervisor',
      },
      {
        model: options.database.academicCertificates,
        as: 'academicCertificates',
      },
      {
        model: options.database.trainingCertificates,
        as: 'trainingCertificates',
      },
      {
        model: options.database.professionalCertifications,
        as: 'professionalCertificates',
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
        as: 'artitistikSkills',
      },
      {
        model: options.database.jobFrameworks,
        as: 'jobFramework',
      },
      {
        model: options.database.connectionLevel,
        as: 'connectionLevel',
      },
      {
        model: options.database.jobRequirments,
        as: 'jobRequirments',
      },
      {
        model: options.database.jobPath,
        as: 'jobPath',
      },
      {
        model: options.database.tasksDuties,
        as: 'tasksDuties',
      },
      {
        model: options.database.administrativeFinancialPowers,
        as: 'administrativeFinancialPowers',
      },
      {
        model: options.database.cardInformation,
        as: 'cardInformation',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.jobs.findOne(
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

    const records = await options.database.jobs.findAll(
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

    return options.database.jobs.count(
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
        model: options.database.user,
        as: 'supervisor',
      },
      {
        model: options.database.academicCertificates,
        as: 'academicCertificates',
      },
      {
        model: options.database.trainingCertificates,
        as: 'trainingCertificates',
      },
      {
        model: options.database.professionalCertifications,
        as: 'professionalCertificates',
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
        as: 'artitistikSkills',
      },
      {
        model: options.database.jobFrameworks,
        as: 'jobFramework',
      },
      {
        model: options.database.connectionLevel,
        as: 'connectionLevel',
      },
      {
        model: options.database.jobRequirments,
        as: 'jobRequirments',
      },
      {
        model: options.database.jobPath,
        as: 'jobPath',
      },
      {
        model: options.database.tasksDuties,
        as: 'tasksDuties',
      },
      {
        model: options.database.administrativeFinancialPowers,
        as: 'administrativeFinancialPowers',
      },
      {
        model: options.database.cardInformation,
        as: 'cardInformation',
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

      if (filter.positionName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'positionName',
            filter.positionName,
          ),
        );
      }

      if (filter.supervisor) {
        whereAnd.push({
          ['supervisorId']: SequelizeFilterUtils.uuid(
            filter.supervisor,
          ),
        });
      }

      if (filter.jobLocation) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'jobLocation',
            filter.jobLocation,
          ),
        );
      }

      if (filter.jobCode) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'jobCode',
            filter.jobCode,
          ),
        );
      }

      if (filter.generalDescription) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'generalDescription',
            filter.generalDescription,
          ),
        );
      }

      if (filter.generalGoals) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'generalGoals',
            filter.generalGoals,
          ),
        );
      }

      if (filter.detailedGoals) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'jobs',
            'detailedGoals',
            filter.detailedGoals,
          ),
        );
      }

      if (filter.academicCertificates) {
        whereAnd.push({
          ['academicCertificatesId']: SequelizeFilterUtils.uuid(
            filter.academicCertificates,
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

      if (filter.professionalCertificates) {
        whereAnd.push({
          ['professionalCertificatesId']: SequelizeFilterUtils.uuid(
            filter.professionalCertificates,
          ),
        });
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

      if (filter.artitistikSkills) {
        whereAnd.push({
          ['artitistikSkillsId']: SequelizeFilterUtils.uuid(
            filter.artitistikSkills,
          ),
        });
      }

      if (filter.jobFramework) {
        whereAnd.push({
          ['jobFrameworkId']: SequelizeFilterUtils.uuid(
            filter.jobFramework,
          ),
        });
      }

      if (filter.connectionLevel) {
        whereAnd.push({
          ['connectionLevelId']: SequelizeFilterUtils.uuid(
            filter.connectionLevel,
          ),
        });
      }

      if (filter.jobRequirments) {
        whereAnd.push({
          ['jobRequirmentsId']: SequelizeFilterUtils.uuid(
            filter.jobRequirments,
          ),
        });
      }

      if (filter.jobPath) {
        whereAnd.push({
          ['jobPathId']: SequelizeFilterUtils.uuid(
            filter.jobPath,
          ),
        });
      }

      if (filter.tasksDuties) {
        whereAnd.push({
          ['tasksDutiesId']: SequelizeFilterUtils.uuid(
            filter.tasksDuties,
          ),
        });
      }

      if (filter.administrativeFinancialPowers) {
        whereAnd.push({
          ['administrativeFinancialPowersId']: SequelizeFilterUtils.uuid(
            filter.administrativeFinancialPowers,
          ),
        });
      }

      if (filter.cardInformation) {
        whereAnd.push({
          ['cardInformationId']: SequelizeFilterUtils.uuid(
            filter.cardInformation,
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
    } = await options.database.jobs.findAndCountAll({
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
              'jobs',
              'positionName',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.jobs.findAll(
      {
        attributes: ['id', 'positionName'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['positionName', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.positionName,
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
        departmentIds: data.department,
        commonCommitteesIds: data.commonCommittees,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'jobs',
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

    output.department = await record.getDepartment({
      transaction,
    });

    output.supervisor = UserRepository.cleanupForRelationships(output.supervisor);

    output.commonCommittees = await record.getCommonCommittees({
      transaction,
    });

    return output;
  }
}

export default JobsRepository;
