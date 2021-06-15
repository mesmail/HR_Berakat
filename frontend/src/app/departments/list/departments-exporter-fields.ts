import { DepartmentsModel } from 'src/app/departments/departments-model';

const { fields } = DepartmentsModel;

export default [
  fields.id,
  fields.departments,
  fields.createdAt,
  fields.updatedAt,
];
