import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { LeaveApplicationFormApi } from 'src/app/leave-application-form/leave-application-form.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class LeaveApplicationFormField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/leave-application-form',
      Permissions.values.leaveApplicationFormRead,
      LeaveApplicationFormApi.listAutocomplete,
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
      '/leave-application-form',
      Permissions.values.leaveApplicationFormRead,
      LeaveApplicationFormApi.listAutocomplete,
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
