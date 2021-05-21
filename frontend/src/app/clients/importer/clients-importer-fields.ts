import { ClientsModel } from 'src/app/clients/clients-model';

const { fields } = ClientsModel;

export default [
  fields.clientName,
  fields.jobCount,
  fields.clientIndustry,
];
