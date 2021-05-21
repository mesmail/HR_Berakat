import { JobsModel } from 'src/app/jobs/jobs-model';

const { fields } = JobsModel;

export default [
  fields.id,
  fields.positionName,
  fields.department,
  fields.supervisor,
  fields.jobLocation,
  fields.jobCode,
  fields.releaseDate,
  fields.generalDescription,
  fields.generalGoals,
  fields.detailedGoals,
  fields.personalAndTechnicalSkills,
  fields.createdAt,
  fields.updatedAt,
];
