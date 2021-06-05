import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ClientsApi } from 'src/app/clients/clients.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ClientsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/clients',
      Permissions.values.clientsRead,
      ClientsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.clientName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/clients',
      Permissions.values.clientsRead,
      ClientsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.clientName,
        };
      },
      options,
    );
  }
}
