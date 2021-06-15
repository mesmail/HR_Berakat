import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { AdministrativeFinancialPowersApi } from 'src/app/administrative-financial-powers/administrative-financial-powers.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class AdministrativeFinancialPowersField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/administrative-financial-powers',
      Permissions.values.administrativeFinancialPowersRead,
      AdministrativeFinancialPowersApi.listAutocomplete,
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
      '/administrative-financial-powers',
      Permissions.values.administrativeFinancialPowersRead,
      AdministrativeFinancialPowersApi.listAutocomplete,
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
