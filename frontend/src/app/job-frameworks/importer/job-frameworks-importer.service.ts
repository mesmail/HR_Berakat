import { Injectable } from '@angular/core';
import { JobFrameworksApi } from 'src/app/job-frameworks/job-frameworks.api';
import jobFrameworksImporterFields from 'src/app/job-frameworks/importer/job-frameworks-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class JobFrameworksImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      JobFrameworksApi.import,
      jobFrameworksImporterFields,
      i18n('entities.jobFrameworks.importer.fileName'),
      i18n('entities.jobFrameworks.importer.hint'),
    );
  }
}
