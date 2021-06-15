import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { JobRequirmentsApi } from 'src/app/job-requirments/job-requirments.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class JobRequirmentsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/job-requirments',
      Permissions.values.jobRequirmentsRead,
      JobRequirmentsApi.listAutocomplete,
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
      '/job-requirments',
      Permissions.values.jobRequirmentsRead,
      JobRequirmentsApi.listAutocomplete,
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
