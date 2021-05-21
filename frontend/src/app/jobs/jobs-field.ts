import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { JobsApi } from 'src/app/jobs/jobs.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class JobsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/jobs',
      Permissions.values.jobsRead,
      JobsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.positionName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/jobs',
      Permissions.values.jobsRead,
      JobsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.positionName,
        };
      },
      options,
    );
  }
}
