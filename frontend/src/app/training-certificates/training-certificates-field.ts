import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TrainingCertificatesApi } from 'src/app/training-certificates/training-certificates.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class TrainingCertificatesField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/training-certificates',
      Permissions.values.trainingCertificatesRead,
      TrainingCertificatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.trainingCertificates,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/training-certificates',
      Permissions.values.trainingCertificatesRead,
      TrainingCertificatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.trainingCertificates,
        };
      },
      options,
    );
  }
}
