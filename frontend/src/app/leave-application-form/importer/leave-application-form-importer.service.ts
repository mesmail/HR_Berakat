import { Injectable } from '@angular/core';
import { LeaveApplicationFormApi } from 'src/app/leave-application-form/leave-application-form.api';
import leaveApplicationFormImporterFields from 'src/app/leave-application-form/importer/leave-application-form-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplicationFormImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      LeaveApplicationFormApi.import,
      leaveApplicationFormImporterFields,
      i18n('entities.leaveApplicationForm.importer.fileName'),
      i18n('entities.leaveApplicationForm.importer.hint'),
    );
  }
}
