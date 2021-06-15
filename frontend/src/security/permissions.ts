import { Roles } from 'src/security/roles';
import { Plans } from 'src/security/plans';
import { Storage } from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

export class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      jobsImport: {
        id: 'jobsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobsCreate: {
        id: 'jobsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobsEdit: {
        id: 'jobsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobsDestroy: {
        id: 'jobsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobsRead: {
        id: 'jobsRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobsAutocomplete: {
        id: 'jobsAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      candidatesImport: {
        id: 'candidatesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      candidatesCreate: {
        id: 'candidatesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.candidatesResume,
          storage.candidatesPhoto,
        ],
      },
      candidatesEdit: {
        id: 'candidatesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.candidatesResume,
          storage.candidatesPhoto,
        ],
      },
      candidatesDestroy: {
        id: 'candidatesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.candidatesResume,
          storage.candidatesPhoto,
        ],
      },
      candidatesRead: {
        id: 'candidatesRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      candidatesAutocomplete: {
        id: 'candidatesAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      academicCertificatesImport: {
        id: 'academicCertificatesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      academicCertificatesCreate: {
        id: 'academicCertificatesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      academicCertificatesEdit: {
        id: 'academicCertificatesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      academicCertificatesDestroy: {
        id: 'academicCertificatesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      academicCertificatesRead: {
        id: 'academicCertificatesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      academicCertificatesAutocomplete: {
        id: 'academicCertificatesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      softSkillsImport: {
        id: 'softSkillsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      softSkillsCreate: {
        id: 'softSkillsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      softSkillsEdit: {
        id: 'softSkillsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      softSkillsDestroy: {
        id: 'softSkillsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      softSkillsRead: {
        id: 'softSkillsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      softSkillsAutocomplete: {
        id: 'softSkillsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      trainingCertificatesImport: {
        id: 'trainingCertificatesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      trainingCertificatesCreate: {
        id: 'trainingCertificatesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      trainingCertificatesEdit: {
        id: 'trainingCertificatesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      trainingCertificatesDestroy: {
        id: 'trainingCertificatesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      trainingCertificatesRead: {
        id: 'trainingCertificatesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      trainingCertificatesAutocomplete: {
        id: 'trainingCertificatesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      professionalCertificationsImport: {
        id: 'professionalCertificationsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      professionalCertificationsCreate: {
        id: 'professionalCertificationsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      professionalCertificationsEdit: {
        id: 'professionalCertificationsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      professionalCertificationsDestroy: {
        id: 'professionalCertificationsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      professionalCertificationsRead: {
        id: 'professionalCertificationsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      professionalCertificationsAutocomplete: {
        id: 'professionalCertificationsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      managementSkillsImport: {
        id: 'managementSkillsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      managementSkillsCreate: {
        id: 'managementSkillsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      managementSkillsEdit: {
        id: 'managementSkillsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      managementSkillsDestroy: {
        id: 'managementSkillsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      managementSkillsRead: {
        id: 'managementSkillsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      managementSkillsAutocomplete: {
        id: 'managementSkillsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      artisticSkillsImport: {
        id: 'artisticSkillsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      artisticSkillsCreate: {
        id: 'artisticSkillsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      artisticSkillsEdit: {
        id: 'artisticSkillsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      artisticSkillsDestroy: {
        id: 'artisticSkillsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      artisticSkillsRead: {
        id: 'artisticSkillsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      artisticSkillsAutocomplete: {
        id: 'artisticSkillsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      clientsImport: {
        id: 'clientsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      clientsCreate: {
        id: 'clientsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clientsEdit: {
        id: 'clientsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clientsDestroy: {
        id: 'clientsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      clientsRead: {
        id: 'clientsRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      clientsAutocomplete: {
        id: 'clientsAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      usersNewImport: {
        id: 'usersNewImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      usersNewCreate: {
        id: 'usersNewCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      usersNewEdit: {
        id: 'usersNewEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      usersNewDestroy: {
        id: 'usersNewDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      usersNewRead: {
        id: 'usersNewRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      usersNewAutocomplete: {
        id: 'usersNewAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      jobFrameworksImport: {
        id: 'jobFrameworksImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobFrameworksCreate: {
        id: 'jobFrameworksCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobFrameworksEdit: {
        id: 'jobFrameworksEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobFrameworksDestroy: {
        id: 'jobFrameworksDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobFrameworksRead: {
        id: 'jobFrameworksRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobFrameworksAutocomplete: {
        id: 'jobFrameworksAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      leaveApplicationFormImport: {
        id: 'leaveApplicationFormImport',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      leaveApplicationFormCreate: {
        id: 'leaveApplicationFormCreate',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      leaveApplicationFormEdit: {
        id: 'leaveApplicationFormEdit',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      leaveApplicationFormDestroy: {
        id: 'leaveApplicationFormDestroy',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      leaveApplicationFormRead: {
        id: 'leaveApplicationFormRead',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      leaveApplicationFormAutocomplete: {
        id: 'leaveApplicationFormAutocomplete',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      employmentContractImport: {
        id: 'employmentContractImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      employmentContractCreate: {
        id: 'employmentContractCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractEdit: {
        id: 'employmentContractEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractDestroy: {
        id: 'employmentContractDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractRead: {
        id: 'employmentContractRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      employmentContractAutocomplete: {
        id: 'employmentContractAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      connectionLevelImport: {
        id: 'connectionLevelImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      connectionLevelCreate: {
        id: 'connectionLevelCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      connectionLevelEdit: {
        id: 'connectionLevelEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      connectionLevelDestroy: {
        id: 'connectionLevelDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      connectionLevelRead: {
        id: 'connectionLevelRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      connectionLevelAutocomplete: {
        id: 'connectionLevelAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      commonComiteesImport: {
        id: 'commonComiteesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      commonComiteesCreate: {
        id: 'commonComiteesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      commonComiteesEdit: {
        id: 'commonComiteesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      commonComiteesDestroy: {
        id: 'commonComiteesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      commonComiteesRead: {
        id: 'commonComiteesRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      commonComiteesAutocomplete: {
        id: 'commonComiteesAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      jobRequirmentsImport: {
        id: 'jobRequirmentsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobRequirmentsCreate: {
        id: 'jobRequirmentsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobRequirmentsEdit: {
        id: 'jobRequirmentsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobRequirmentsDestroy: {
        id: 'jobRequirmentsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobRequirmentsRead: {
        id: 'jobRequirmentsRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobRequirmentsAutocomplete: {
        id: 'jobRequirmentsAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      jobPathImport: {
        id: 'jobPathImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobPathCreate: {
        id: 'jobPathCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobPathEdit: {
        id: 'jobPathEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobPathDestroy: {
        id: 'jobPathDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      jobPathRead: {
        id: 'jobPathRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobPathAutocomplete: {
        id: 'jobPathAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      tasksDutiesImport: {
        id: 'tasksDutiesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tasksDutiesCreate: {
        id: 'tasksDutiesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tasksDutiesEdit: {
        id: 'tasksDutiesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tasksDutiesDestroy: {
        id: 'tasksDutiesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tasksDutiesRead: {
        id: 'tasksDutiesRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tasksDutiesAutocomplete: {
        id: 'tasksDutiesAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      administrativeFinancialPowersImport: {
        id: 'administrativeFinancialPowersImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      administrativeFinancialPowersCreate: {
        id: 'administrativeFinancialPowersCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      administrativeFinancialPowersEdit: {
        id: 'administrativeFinancialPowersEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      administrativeFinancialPowersDestroy: {
        id: 'administrativeFinancialPowersDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      administrativeFinancialPowersRead: {
        id: 'administrativeFinancialPowersRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      administrativeFinancialPowersAutocomplete: {
        id: 'administrativeFinancialPowersAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      cardInformationImport: {
        id: 'cardInformationImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cardInformationCreate: {
        id: 'cardInformationCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cardInformationEdit: {
        id: 'cardInformationEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cardInformationDestroy: {
        id: 'cardInformationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cardInformationRead: {
        id: 'cardInformationRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cardInformationAutocomplete: {
        id: 'cardInformationAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      tellProblemImport: {
        id: 'tellProblemImport',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tellProblemCreate: {
        id: 'tellProblemCreate',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tellProblemEdit: {
        id: 'tellProblemEdit',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tellProblemDestroy: {
        id: 'tellProblemDestroy',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      tellProblemRead: {
        id: 'tellProblemRead',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      tellProblemAutocomplete: {
        id: 'tellProblemAutocomplete',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      departmentsImport: {
        id: 'departmentsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      departmentsCreate: {
        id: 'departmentsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      departmentsEdit: {
        id: 'departmentsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      departmentsDestroy: {
        id: 'departmentsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      departmentsRead: {
        id: 'departmentsRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      departmentsAutocomplete: {
        id: 'departmentsAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}
