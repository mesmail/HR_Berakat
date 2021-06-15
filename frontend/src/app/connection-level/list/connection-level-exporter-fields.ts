import { ConnectionLevelModel } from 'src/app/connection-level/connection-level-model';

const { fields } = ConnectionLevelModel;

export default [
  fields.id,
  fields.external,
  fields.internal,
  fields.createdAt,
  fields.updatedAt,
];
