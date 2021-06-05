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
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      jobsAutocomplete: {
        id: 'jobsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      academicCertificatesAutocomplete: {
        id: 'academicCertificatesAutocomplete',
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      softSkillsAutocomplete: {
        id: 'softSkillsAutocomplete',
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      trainingCertificatesAutocomplete: {
        id: 'trainingCertificatesAutocomplete',
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      professionalCertificationsAutocomplete: {
        id: 'professionalCertificationsAutocomplete',
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      managementSkillsAutocomplete: {
        id: 'managementSkillsAutocomplete',
        allowedRoles: [roles.admin],
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
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      artisticSkillsAutocomplete: {
        id: 'artisticSkillsAutocomplete',
        allowedRoles: [roles.admin],
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

      claimImport: {
        id: 'claimImport',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      claimCreate: {
        id: 'claimCreate',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      claimEdit: {
        id: 'claimEdit',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      claimDestroy: {
        id: 'claimDestroy',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      claimRead: {
        id: 'claimRead',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      claimAutocomplete: {
        id: 'claimAutocomplete',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      advancedPaymentImport: {
        id: 'advancedPaymentImport',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      advancedPaymentCreate: {
        id: 'advancedPaymentCreate',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      advancedPaymentEdit: {
        id: 'advancedPaymentEdit',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      advancedPaymentDestroy: {
        id: 'advancedPaymentDestroy',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      advancedPaymentRead: {
        id: 'advancedPaymentRead',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      advancedPaymentAutocomplete: {
        id: 'advancedPaymentAutocomplete',
        allowedRoles: [roles.custom],
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

      employmentContractImport: {
        id: 'employmentContractImport',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      employmentContractCreate: {
        id: 'employmentContractCreate',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractEdit: {
        id: 'employmentContractEdit',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractDestroy: {
        id: 'employmentContractDestroy',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      employmentContractRead: {
        id: 'employmentContractRead',
        allowedRoles: [roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      employmentContractAutocomplete: {
        id: 'employmentContractAutocomplete',
        allowedRoles: [roles.custom],
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
