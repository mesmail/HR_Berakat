import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CardInformationApi } from 'src/app/card-information/card-information.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CardInformationField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/card-information',
      Permissions.values.cardInformationRead,
      CardInformationApi.listAutocomplete,
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
      '/card-information',
      Permissions.values.cardInformationRead,
      CardInformationApi.listAutocomplete,
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
