import { JobPathModel } from 'src/app/job-path/job-path-model';

const { fields } = JobPathModel;

export default [
  fields.id,
  fields.jobName,
  fields.promotionIndicators,
  fields.createdAt,
  fields.updatedAt,
];
