import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { JobPathApi } from 'src/app/job-path/job-path.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class JobPathField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/job-path',
      Permissions.values.jobPathRead,
      JobPathApi.listAutocomplete,
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
      '/job-path',
      Permissions.values.jobPathRead,
      JobPathApi.listAutocomplete,
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
