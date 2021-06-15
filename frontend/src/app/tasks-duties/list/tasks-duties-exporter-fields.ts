import { TasksDutiesModel } from 'src/app/tasks-duties/tasks-duties-model';

const { fields } = TasksDutiesModel;

export default [
  fields.id,
  fields.tasksDuties,
  fields.createdAt,
  fields.updatedAt,
];
