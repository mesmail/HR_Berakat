import { CommonComiteesModel } from 'src/app/common-comitees/common-comitees-model';

const { fields } = CommonComiteesModel;

export default [
  fields.id,
  fields.addedCommittee,
  fields.menus,
  fields.createdAt,
  fields.updatedAt,
];
