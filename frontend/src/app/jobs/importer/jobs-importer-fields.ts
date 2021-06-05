import { JobsModel } from 'src/app/jobs/jobs-model';

const { fields } = JobsModel;

export default [
  fields.positionName,
  fields.department,
  fields.supervisor,
  fields.jobLocation,
  fields.jobCode,
  fields.releaseDate,
  fields.generalDescription,
  fields.generalGoals,
  fields.detailedGoals,
  fields.leaves,
  fields.personalAndTechnicalSkills,
];
