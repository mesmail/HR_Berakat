import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class LeaveApplicationFormRepository {

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

    const record = await options.database.leaveApplicationForm.create(
      {
        ...lodash.pick(data, [
          'name',
          'department',
          'date',
          'contactNo',
          'employeeNo',
          'absenceWork',
          'period',
          'specify',
          'reasons',
          'others',
          'noDays',
          'noTaken',
          'noBalance',
          'remarks',
          'status',          
          'importHash',
        ]),
        positionId: data.position || null,
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

    let record = await options.database.leaveApplicationForm.findOne(      
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
          'name',
          'department',
          'date',
          'contactNo',
          'employeeNo',
          'absenceWork',
          'period',
          'specify',
          'reasons',
          'others',
          'noDays',
          'noTaken',
          'noBalance',
          'remarks',
          'status',          
          'importHash',
        ]),
        positionId: data.position || null,
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

    let record = await options.database.leaveApplicationForm.findOne(
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
        as: 'position',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.leaveApplicationForm.findOne(
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

    const records = await options.database.leaveApplicationForm.findAll(
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

    return options.database.leaveApplicationForm.count(
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
        as: 'position',
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

      if (filter.name) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'name',
            filter.name,
          ),
        );
      }

      if (filter.position) {
        whereAnd.push({
          ['positionId']: SequelizeFilterUtils.uuid(
            filter.position,
          ),
        });
      }

      if (filter.department) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'department',
            filter.department,
          ),
        );
      }

      if (filter.dateRange) {
        const [start, end] = filter.dateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            date: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            date: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.contactNo) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'contactNo',
            filter.contactNo,
          ),
        );
      }

      if (filter.employeeNo) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'employeeNo',
            filter.employeeNo,
          ),
        );
      }

      if (filter.absenceWorkRange) {
        const [start, end] = filter.absenceWorkRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            absenceWork: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            absenceWork: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.periodRange) {
        const [start, end] = filter.periodRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            period: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            period: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.specify) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'specify',
            filter.specify,
          ),
        );
      }

      if (filter.reasons) {
        whereAnd.push({
          reasons: filter.reasons,
        });
      }

      if (filter.others) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'others',
            filter.others,
          ),
        );
      }

      if (filter.noDaysRange) {
        const [start, end] = filter.noDaysRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            noDays: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            noDays: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.noTakenRange) {
        const [start, end] = filter.noTakenRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            noTaken: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            noTaken: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.noBalanceRange) {
        const [start, end] = filter.noBalanceRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            noBalance: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            noBalance: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.remarks) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'leaveApplicationForm',
            'remarks',
            filter.remarks,
          ),
        );
      }

      if (filter.status) {
        whereAnd.push({
          status: filter.status,
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
    } = await options.database.leaveApplicationForm.findAndCountAll({
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

    const records = await options.database.leaveApplicationForm.findAll(
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
        entityName: 'leaveApplicationForm',
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

export default LeaveApplicationFormRepository;
