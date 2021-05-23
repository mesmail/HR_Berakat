import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import JobsRepository from '../database/repositories/jobsRepository';
import DepartmentsRepository from '../database/repositories/departmentsRepository';
import LeaveApplicationFormRepository from '../database/repositories/leaveApplicationFormRepository';
import SoftSkillsRepository from '../database/repositories/softSkillsRepository';
import UserRepository from '../database/repositories/userRepository';

export default class JobsService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.department = await DepartmentsRepository.filterIdInTenant(data.department, { ...this.options, transaction });
      data.supervisor = await UserRepository.filterIdInTenant(data.supervisor, { ...this.options, transaction });
      data.leaves = await LeaveApplicationFormRepository.filterIdsInTenant(data.leaves, { ...this.options, transaction });
      data.personalAndTechnicalSkills = await SoftSkillsRepository.filterIdInTenant(data.personalAndTechnicalSkills, { ...this.options, transaction });

      const record = await JobsRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'jobs',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.department = await DepartmentsRepository.filterIdInTenant(data.department, { ...this.options, transaction });
      data.supervisor = await UserRepository.filterIdInTenant(data.supervisor, { ...this.options, transaction });
      data.leaves = await LeaveApplicationFormRepository.filterIdsInTenant(data.leaves, { ...this.options, transaction });
      data.personalAndTechnicalSkills = await SoftSkillsRepository.filterIdInTenant(data.personalAndTechnicalSkills, { ...this.options, transaction });

      const record = await JobsRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'jobs',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await JobsRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return JobsRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return JobsRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return JobsRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await JobsRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
