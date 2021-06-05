import { Injectable } from '@angular/core';
import { JobsApi } from 'src/app/jobs/jobs.api';
import jobsImporterFields from 'src/app/jobs/importer/jobs-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class JobsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      JobsApi.import,
      jobsImporterFields,
      i18n('entities.jobs.importer.fileName'),
      i18n('entities.jobs.importer.hint'),
    );
  }
}
