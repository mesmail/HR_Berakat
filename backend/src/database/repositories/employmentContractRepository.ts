import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class EmploymentContractRepository {

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

    const record = await options.database.employmentContract.create(
      {
        ...lodash.pick(data, [
          'contractDate',
          'companyRepresentative',
          'secondParty',
          'nationality',
          'passportNumber',
          'passportIssueDate',
          'email',
          'jobTitle',
          'dailyWorkingHours',
          'weeklyWorkingHours',
          'weekEndDay',
          'workStartDate',
          'employeeName',
          'positionName',
          'basicSalary',          
          'importHash',
        ]),

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

    let record = await options.database.employmentContract.findOne(      
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
          'contractDate',
          'companyRepresentative',
          'secondParty',
          'nationality',
          'passportNumber',
          'passportIssueDate',
          'email',
          'jobTitle',
          'dailyWorkingHours',
          'weeklyWorkingHours',
          'weekEndDay',
          'workStartDate',
          'employeeName',
          'positionName',
          'basicSalary',          
          'importHash',
        ]),

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

    let record = await options.database.employmentContract.findOne(
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

    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.employmentContract.findOne(
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

    const records = await options.database.employmentContract.findAll(
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

    return options.database.employmentContract.count(
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

      if (filter.contractDateRange) {
        const [start, end] = filter.contractDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            contractDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            contractDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.companyRepresentative) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'companyRepresentative',
            filter.companyRepresentative,
          ),
        );
      }

      if (filter.secondParty) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'secondParty',
            filter.secondParty,
          ),
        );
      }

      if (filter.nationality) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'nationality',
            filter.nationality,
          ),
        );
      }

      if (filter.passportNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'passportNumber',
            filter.passportNumber,
          ),
        );
      }

      if (filter.passportIssueDateRange) {
        const [start, end] = filter.passportIssueDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            passportIssueDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            passportIssueDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.email) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'email',
            filter.email,
          ),
        );
      }

      if (filter.jobTitle) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'jobTitle',
            filter.jobTitle,
          ),
        );
      }

      if (filter.dailyWorkingHoursRange) {
        const [start, end] = filter.dailyWorkingHoursRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            dailyWorkingHours: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            dailyWorkingHours: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.weeklyWorkingHoursRange) {
        const [start, end] = filter.weeklyWorkingHoursRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            weeklyWorkingHours: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            weeklyWorkingHours: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.weekEndDay) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'weekEndDay',
            filter.weekEndDay,
          ),
        );
      }

      if (filter.workStartDateRange) {
        const [start, end] = filter.workStartDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            workStartDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            workStartDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.employeeName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'employeeName',
            filter.employeeName,
          ),
        );
      }

      if (filter.positionName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'employmentContract',
            'positionName',
            filter.positionName,
          ),
        );
      }

      if (filter.basicSalaryRange) {
        const [start, end] = filter.basicSalaryRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            basicSalary: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            basicSalary: {
              [Op.lte]: end,
            },
          });
        }
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
    } = await options.database.employmentContract.findAndCountAll({
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

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.employmentContract.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
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
        entityName: 'employmentContract',
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



    return output;
  }
}

export default EmploymentContractRepository;
