import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { DepartmentsApi } from 'src/app/departments/departments.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class DepartmentsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/departments',
      Permissions.values.departmentsRead,
      DepartmentsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.departmentName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/departments',
      Permissions.values.departmentsRead,
      DepartmentsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.departmentName,
        };
      },
      options,
    );
  }
}
