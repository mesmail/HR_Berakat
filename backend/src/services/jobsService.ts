import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import JobsRepository from '../database/repositories/jobsRepository';
import DepartmentsRepository from '../database/repositories/departmentsRepository';
import AcademicCertificatesRepository from '../database/repositories/academicCertificatesRepository';
import TrainingCertificatesRepository from '../database/repositories/trainingCertificatesRepository';
import ProfessionalCertificationsRepository from '../database/repositories/professionalCertificationsRepository';
import SoftSkillsRepository from '../database/repositories/softSkillsRepository';
import ManagementSkillsRepository from '../database/repositories/managementSkillsRepository';
import ArtisticSkillsRepository from '../database/repositories/artisticSkillsRepository';
import JobFrameworksRepository from '../database/repositories/jobFrameworksRepository';
import ConnectionLevelRepository from '../database/repositories/connectionLevelRepository';
import CommonComiteesRepository from '../database/repositories/commonComiteesRepository';
import JobRequirmentsRepository from '../database/repositories/jobRequirmentsRepository';
import JobPathRepository from '../database/repositories/jobPathRepository';
import TasksDutiesRepository from '../database/repositories/tasksDutiesRepository';
import AdministrativeFinancialPowersRepository from '../database/repositories/administrativeFinancialPowersRepository';
import CardInformationRepository from '../database/repositories/cardInformationRepository';
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
      data.department = await DepartmentsRepository.filterIdsInTenant(data.department, { ...this.options, transaction });
      data.supervisor = await UserRepository.filterIdInTenant(data.supervisor, { ...this.options, transaction });
      data.academicCertificates = await AcademicCertificatesRepository.filterIdInTenant(data.academicCertificates, { ...this.options, transaction });
      data.trainingCertificates = await TrainingCertificatesRepository.filterIdInTenant(data.trainingCertificates, { ...this.options, transaction });
      data.professionalCertificates = await ProfessionalCertificationsRepository.filterIdInTenant(data.professionalCertificates, { ...this.options, transaction });
      data.softSkills = await SoftSkillsRepository.filterIdInTenant(data.softSkills, { ...this.options, transaction });
      data.managementSkills = await ManagementSkillsRepository.filterIdInTenant(data.managementSkills, { ...this.options, transaction });
      data.artitistikSkills = await ArtisticSkillsRepository.filterIdInTenant(data.artitistikSkills, { ...this.options, transaction });
      data.jobFramework = await JobFrameworksRepository.filterIdInTenant(data.jobFramework, { ...this.options, transaction });
      data.connectionLevel = await ConnectionLevelRepository.filterIdInTenant(data.connectionLevel, { ...this.options, transaction });
      data.commonCommittees = await CommonComiteesRepository.filterIdsInTenant(data.commonCommittees, { ...this.options, transaction });
      data.jobRequirments = await JobRequirmentsRepository.filterIdInTenant(data.jobRequirments, { ...this.options, transaction });
      data.jobPath = await JobPathRepository.filterIdInTenant(data.jobPath, { ...this.options, transaction });
      data.tasksDuties = await TasksDutiesRepository.filterIdInTenant(data.tasksDuties, { ...this.options, transaction });
      data.administrativeFinancialPowers = await AdministrativeFinancialPowersRepository.filterIdInTenant(data.administrativeFinancialPowers, { ...this.options, transaction });
      data.cardInformation = await CardInformationRepository.filterIdInTenant(data.cardInformation, { ...this.options, transaction });

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
      data.department = await DepartmentsRepository.filterIdsInTenant(data.department, { ...this.options, transaction });
      data.supervisor = await UserRepository.filterIdInTenant(data.supervisor, { ...this.options, transaction });
      data.academicCertificates = await AcademicCertificatesRepository.filterIdInTenant(data.academicCertificates, { ...this.options, transaction });
      data.trainingCertificates = await TrainingCertificatesRepository.filterIdInTenant(data.trainingCertificates, { ...this.options, transaction });
      data.professionalCertificates = await ProfessionalCertificationsRepository.filterIdInTenant(data.professionalCertificates, { ...this.options, transaction });
      data.softSkills = await SoftSkillsRepository.filterIdInTenant(data.softSkills, { ...this.options, transaction });
      data.managementSkills = await ManagementSkillsRepository.filterIdInTenant(data.managementSkills, { ...this.options, transaction });
      data.artitistikSkills = await ArtisticSkillsRepository.filterIdInTenant(data.artitistikSkills, { ...this.options, transaction });
      data.jobFramework = await JobFrameworksRepository.filterIdInTenant(data.jobFramework, { ...this.options, transaction });
      data.connectionLevel = await ConnectionLevelRepository.filterIdInTenant(data.connectionLevel, { ...this.options, transaction });
      data.commonCommittees = await CommonComiteesRepository.filterIdsInTenant(data.commonCommittees, { ...this.options, transaction });
      data.jobRequirments = await JobRequirmentsRepository.filterIdInTenant(data.jobRequirments, { ...this.options, transaction });
      data.jobPath = await JobPathRepository.filterIdInTenant(data.jobPath, { ...this.options, transaction });
      data.tasksDuties = await TasksDutiesRepository.filterIdInTenant(data.tasksDuties, { ...this.options, transaction });
      data.administrativeFinancialPowers = await AdministrativeFinancialPowersRepository.filterIdInTenant(data.administrativeFinancialPowers, { ...this.options, transaction });
      data.cardInformation = await CardInformationRepository.filterIdInTenant(data.cardInformation, { ...this.options, transaction });

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
