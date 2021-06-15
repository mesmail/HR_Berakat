import { Injectable } from '@angular/core';
import { JobRequirmentsApi } from 'src/app/job-requirments/job-requirments.api';
import jobRequirmentsImporterFields from 'src/app/job-requirments/importer/job-requirments-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class JobRequirmentsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      JobRequirmentsApi.import,
      jobRequirmentsImporterFields,
      i18n('entities.jobRequirments.importer.fileName'),
      i18n('entities.jobRequirments.importer.hint'),
    );
  }
}
