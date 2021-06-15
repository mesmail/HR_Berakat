import { Injectable } from '@angular/core';
import { JobPathApi } from 'src/app/job-path/job-path.api';
import jobPathImporterFields from 'src/app/job-path/importer/job-path-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class JobPathImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      JobPathApi.import,
      jobPathImporterFields,
      i18n('entities.jobPath.importer.fileName'),
      i18n('entities.jobPath.importer.hint'),
    );
  }
}
