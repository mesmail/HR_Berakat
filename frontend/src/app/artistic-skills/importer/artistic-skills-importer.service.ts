import { Injectable } from '@angular/core';
import { ArtisticSkillsApi } from 'src/app/artistic-skills/artistic-skills.api';
import artisticSkillsImporterFields from 'src/app/artistic-skills/importer/artistic-skills-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ArtisticSkillsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ArtisticSkillsApi.import,
      artisticSkillsImporterFields,
      i18n('entities.artisticSkills.importer.fileName'),
      i18n('entities.artisticSkills.importer.hint'),
    );
  }
}
