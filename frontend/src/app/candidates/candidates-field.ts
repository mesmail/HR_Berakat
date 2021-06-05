import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CandidatesApi } from 'src/app/candidates/candidates.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CandidatesField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/candidates',
      Permissions.values.candidatesRead,
      CandidatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.candidateName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/candidates',
      Permissions.values.candidatesRead,
      CandidatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.candidateName,
        };
      },
      options,
    );
  }
}
