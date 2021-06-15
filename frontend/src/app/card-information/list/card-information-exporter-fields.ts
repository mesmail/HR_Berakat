import { CardInformationModel } from 'src/app/card-information/card-information-model';

const { fields } = CardInformationModel;

export default [
  fields.id,
  fields.version,
  fields.date,
  fields.generalManager,
  fields.hRManager,
  fields.createdAt,
  fields.updatedAt,
];
