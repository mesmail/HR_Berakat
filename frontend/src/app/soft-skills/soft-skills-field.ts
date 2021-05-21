import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { SoftSkillsApi } from 'src/app/soft-skills/soft-skills.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class SoftSkillsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/soft-skills',
      Permissions.values.softSkillsRead,
      SoftSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/soft-skills',
      Permissions.values.softSkillsRead,
      SoftSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }
}
