import { JobRequirmentsModel } from 'src/app/job-requirments/job-requirments-model';

const { fields } = JobRequirmentsModel;

export default [
  fields.id,
  fields.tactLevel,
  fields.experienceYears,
  fields.minKPI,
  fields.createdAt,
  fields.updatedAt,
];
