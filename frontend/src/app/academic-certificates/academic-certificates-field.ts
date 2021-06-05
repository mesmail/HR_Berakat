import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { AcademicCertificatesApi } from 'src/app/academic-certificates/academic-certificates.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class AcademicCertificatesField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/academic-certificates',
      Permissions.values.academicCertificatesRead,
      AcademicCertificatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.academicCertificates,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/academic-certificates',
      Permissions.values.academicCertificatesRead,
      AcademicCertificatesApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.academicCertificates,
        };
      },
      options,
    );
  }
}
