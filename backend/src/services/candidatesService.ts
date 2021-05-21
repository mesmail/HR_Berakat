import CandidatesRepository from '../database/repositories/candidatesRepository';
import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import JobsRepository from '../database/repositories/jobsRepository';
import AcademicCertificatesRepository from '../database/repositories/academicCertificatesRepository';
import TrainingCertificatesRepository from '../database/repositories/trainingCertificatesRepository';
import SoftSkillsRepository from '../database/repositories/softSkillsRepository';
import ManagementSkillsRepository from '../database/repositories/managementSkillsRepository';
import ArtisticSkillsRepository from '../database/repositories/artisticSkillsRepository';
import UserRepository from '../database/repositories/userRepository';

export default class CandidatesService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.currentPosition = await JobsRepository.filterIdInTenant(data.currentPosition, { ...this.options, transaction });
      data.academicCertificateSpecialization = await AcademicCertificatesRepository.filterIdInTenant(data.academicCertificateSpecialization, { ...this.options, transaction });
      data.trainingCertificates = await TrainingCertificatesRepository.filterIdInTenant(data.trainingCertificates, { ...this.options, transaction });
      data.softSkills = await SoftSkillsRepository.filterIdInTenant(data.softSkills, { ...this.options, transaction });
      data.managementSkills = await ManagementSkillsRepository.filterIdInTenant(data.managementSkills, { ...this.options, transaction });
      data.artisticSkills = await ArtisticSkillsRepository.filterIdInTenant(data.artisticSkills, { ...this.options, transaction });
      data.jobs = await JobsRepository.filterIdInTenant(data.jobs, { ...this.options, transaction });

      const record = await CandidatesRepository.create(data, {
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
        'candidates',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.currentPosition = await JobsRepository.filterIdInTenant(data.currentPosition, { ...this.options, transaction });
      data.academicCertificateSpecialization = await AcademicCertificatesRepository.filterIdInTenant(data.academicCertificateSpecialization, { ...this.options, transaction });
      data.trainingCertificates = await TrainingCertificatesRepository.filterIdInTenant(data.trainingCertificates, { ...this.options, transaction });
      data.softSkills = await SoftSkillsRepository.filterIdInTenant(data.softSkills, { ...this.options, transaction });
      data.managementSkills = await ManagementSkillsRepository.filterIdInTenant(data.managementSkills, { ...this.options, transaction });
      data.artisticSkills = await ArtisticSkillsRepository.filterIdInTenant(data.artisticSkills, { ...this.options, transaction });
      data.jobs = await JobsRepository.filterIdInTenant(data.jobs, { ...this.options, transaction });

      const record = await CandidatesRepository.update(
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
        'candidates',
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
        await CandidatesRepository.destroy(id, {
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
    return CandidatesRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return CandidatesRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return CandidatesRepository.findAndCountAll(
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
    const count = await CandidatesRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
