import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ClaimApi } from 'src/app/claim/claim.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ClaimField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/claim',
      Permissions.values.claimRead,
      ClaimApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.problemDescription,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/claim',
      Permissions.values.claimRead,
      ClaimApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.problemDescription,
        };
      },
      options,
    );
  }
}
