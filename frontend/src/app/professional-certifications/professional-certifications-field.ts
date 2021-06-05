import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ProfessionalCertificationsApi } from 'src/app/professional-certifications/professional-certifications.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ProfessionalCertificationsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/professional-certifications',
      Permissions.values.professionalCertificationsRead,
      ProfessionalCertificationsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.professionalCertifications,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/professional-certifications',
      Permissions.values.professionalCertificationsRead,
      ProfessionalCertificationsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.professionalCertifications,
        };
      },
      options,
    );
  }
}
