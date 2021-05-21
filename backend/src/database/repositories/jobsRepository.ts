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
          'releaseDate',
          'generalDescription',
          'generalGoals',
          'detailedGoals',          
          'importHash',
        ]),
        departmentId: data.department || null,
        supervisorId: data.supervisor || null,
        personalAndTechnicalSkillsId: data.personalAndTechnicalSkills || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
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
          'releaseDate',
          'generalDescription',
          'generalGoals',
          'detailedGoals',          
          'importHash',
        ]),
        departmentId: data.department || null,
        supervisorId: data.supervisor || null,
        personalAndTechnicalSkillsId: data.personalAndTechnicalSkills || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
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
        model: options.database.departments,
        as: 'department',
      },
      {
        model: options.database.user,
        as: 'supervisor',
      },
      {
        model: options.database.softSkills,
        as: 'personalAndTechnicalSkills',
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
        model: options.database.departments,
        as: 'department',
      },
      {
        model: options.database.user,
        as: 'supervisor',
      },
      {
        model: options.database.softSkills,
        as: 'personalAndTechnicalSkills',
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

      if (filter.department) {
        whereAnd.push({
          ['departmentId']: SequelizeFilterUtils.uuid(
            filter.department,
          ),
        });
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

      if (filter.releaseDateRange) {
        const [start, end] = filter.releaseDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            releaseDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            releaseDate: {
              [Op.lte]: end,
            },
          });
        }
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

      if (filter.personalAndTechnicalSkills) {
        whereAnd.push({
          ['personalAndTechnicalSkillsId']: SequelizeFilterUtils.uuid(
            filter.personalAndTechnicalSkills,
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

    output.supervisor = UserRepository.cleanupForRelationships(output.supervisor);

    return output;
  }
}

export default JobsRepository;
