import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TellProblemApi } from 'src/app/tell-problem/tell-problem.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class TellProblemField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/tell-problem',
      Permissions.values.tellProblemRead,
      TellProblemApi.listAutocomplete,
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
      '/tell-problem',
      Permissions.values.tellProblemRead,
      TellProblemApi.listAutocomplete,
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
