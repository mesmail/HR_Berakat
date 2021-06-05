import { Injectable } from '@angular/core';
import { SoftSkillsApi } from 'src/app/soft-skills/soft-skills.api';
import softSkillsImporterFields from 'src/app/soft-skills/importer/soft-skills-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      SoftSkillsApi.import,
      softSkillsImporterFields,
      i18n('entities.softSkills.importer.fileName'),
      i18n('entities.softSkills.importer.hint'),
    );
  }
}
