import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ManagementSkillsApi } from 'src/app/management-skills/management-skills.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ManagementSkillsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/management-skills',
      Permissions.values.managementSkillsRead,
      ManagementSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.managementSkills,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/management-skills',
      Permissions.values.managementSkillsRead,
      ManagementSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.managementSkills,
        };
      },
      options,
    );
  }
}
