import { ClientsModel } from 'src/app/clients/clients-model';

const { fields } = ClientsModel;

export default [
  fields.id,
  fields.clientName,
  fields.jobCount,
  fields.clientIndustry,
  fields.createdAt,
  fields.updatedAt,
];
