import { ClaimModel } from 'src/app/claim/claim-model';

const { fields } = ClaimModel;

export default [
  fields.id,
  fields.problemDescription,
  fields.createdAt,
  fields.updatedAt,
];
