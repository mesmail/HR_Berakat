import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { UserApi } from 'src/app/user/user.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class UserField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/user',
      Permissions.values.userRead,
      UserApi.fetchUserAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        let label = record.email;

        if (record.fullName) {
          label = `${record.fullName} <${record.email}>`;
        }

        return {
          id: record.id,
          label,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/user',
      Permissions.values.userRead,
      UserApi.fetchUserAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        let label = record.email;

        if (record.fullName) {
          label = `${record.fullName} <${record.email}>`;
        }

        return {
          id: record.id,
          label,
        };
      },
      options,
    );
  }
}
