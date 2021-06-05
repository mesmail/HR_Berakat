import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { UsersNewApi } from 'src/app/users-new/users-new.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class UsersNewField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/users-new',
      Permissions.values.usersNewRead,
      UsersNewApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.firsrtName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/users-new',
      Permissions.values.usersNewRead,
      UsersNewApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.firsrtName,
        };
      },
      options,
    );
  }
}
