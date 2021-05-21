import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ArtisticSkillsApi } from 'src/app/artistic-skills/artistic-skills.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ArtisticSkillsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/artistic-skills',
      Permissions.values.artisticSkillsRead,
      ArtisticSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.artisticSkills,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/artistic-skills',
      Permissions.values.artisticSkillsRead,
      ArtisticSkillsApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.artisticSkills,
        };
      },
      options,
    );
  }
}
