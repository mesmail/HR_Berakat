import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CommonComiteesApi } from 'src/app/common-comitees/common-comitees.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CommonComiteesField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/common-comitees',
      Permissions.values.commonComiteesRead,
      CommonComiteesApi.listAutocomplete,
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
      '/common-comitees',
      Permissions.values.commonComiteesRead,
      CommonComiteesApi.listAutocomplete,
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
