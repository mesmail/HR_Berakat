import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { EmploymentContractApi } from 'src/app/employment-contract/employment-contract.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class EmploymentContractField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/employment-contract',
      Permissions.values.employmentContractRead,
      EmploymentContractApi.listAutocomplete,
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
      '/employment-contract',
      Permissions.values.employmentContractRead,
      EmploymentContractApi.listAutocomplete,
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
