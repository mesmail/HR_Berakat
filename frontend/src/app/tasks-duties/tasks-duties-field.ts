import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TasksDutiesApi } from 'src/app/tasks-duties/tasks-duties.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class TasksDutiesField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/tasks-duties',
      Permissions.values.tasksDutiesRead,
      TasksDutiesApi.listAutocomplete,
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
      '/tasks-duties',
      Permissions.values.tasksDutiesRead,
      TasksDutiesApi.listAutocomplete,
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
