import { JobsModel } from 'src/app/jobs/jobs-model';

const { fields } = JobsModel;

export default [
  fields.positionName,
  fields.department,
  fields.supervisor,
  fields.jobLocation,
  fields.jobCode,
  fields.generalDescription,
  fields.generalGoals,
  fields.detailedGoals,
  fields.academicCertificates,
  fields.trainingCertificates,
  fields.professionalCertificates,
  fields.softSkills,
  fields.managementSkills,
  fields.artitistikSkills,
  fields.jobFramework,
  fields.connectionLevel,
  fields.commonCommittees,
  fields.jobRequirments,
  fields.jobPath,
  fields.tasksDuties,
  fields.administrativeFinancialPowers,
  fields.cardInformation,
];
