import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { JobFrameworksApi } from 'src/app/job-frameworks/job-frameworks.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class JobFrameworksField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/job-frameworks',
      Permissions.values.jobFrameworksRead,
      JobFrameworksApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.takeMultipleTasks,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/job-frameworks',
      Permissions.values.jobFrameworksRead,
      JobFrameworksApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.takeMultipleTasks,
        };
      },
      options,
    );
  }
}
