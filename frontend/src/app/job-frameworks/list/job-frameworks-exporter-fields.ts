import { JobFrameworksModel } from 'src/app/job-frameworks/job-frameworks-model';

const { fields } = JobFrameworksModel;

export default [
  fields.id,
  fields.takeMultipleTasks,
  fields.impactSalary,
  fields.impactJobGrade,
  fields.createdAt,
  fields.updatedAt,
];
