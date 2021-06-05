import { UsersNewModel } from 'src/app/users-new/users-new-model';

const { fields } = UsersNewModel;

export default [
  fields.id,
  fields.email,
  fields.firsrtName,
  fields.secondName,
  fields.phoneNumber,
  fields.roles,
  fields.createdAt,
  fields.updatedAt,
];
