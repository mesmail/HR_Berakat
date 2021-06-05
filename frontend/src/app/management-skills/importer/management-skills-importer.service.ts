import { Injectable } from '@angular/core';
import { ManagementSkillsApi } from 'src/app/management-skills/management-skills.api';
import managementSkillsImporterFields from 'src/app/management-skills/importer/management-skills-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ManagementSkillsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ManagementSkillsApi.import,
      managementSkillsImporterFields,
      i18n('entities.managementSkills.importer.fileName'),
      i18n('entities.managementSkills.importer.hint'),
    );
  }
}
