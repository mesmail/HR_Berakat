import { CandidatesModel } from 'src/app/candidates/candidates-model';

const { fields } = CandidatesModel;

export default [
  fields.candidateName,
  fields.currentPosition,
  fields.candidateReference,
  fields.gender,
  fields.academicCertificateSpecialization,
  fields.trainingCertificates,
  fields.currentCompany,
  fields.noticePeriod,
  fields.currentSalary,
  fields.expectedSalary,
  fields.softSkills,
  fields.managementSkills,
  fields.artisticSkills,
  fields.candidateCreatedDate,
  fields.jobs,
  fields.resume,
  fields.photo,
  fields.tactLevel,
  fields.yearsExperience,
];
