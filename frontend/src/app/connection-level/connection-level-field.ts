import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ConnectionLevelApi } from 'src/app/connection-level/connection-level.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ConnectionLevelField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/connection-level',
      Permissions.values.connectionLevelRead,
      ConnectionLevelApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/connection-level',
      Permissions.values.connectionLevelRead,
      ConnectionLevelApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
