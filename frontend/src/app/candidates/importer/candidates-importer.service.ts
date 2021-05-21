import { Injectable } from '@angular/core';
import { CandidatesApi } from 'src/app/candidates/candidates.api';
import candidatesImporterFields from 'src/app/candidates/importer/candidates-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CandidatesImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CandidatesApi.import,
      candidatesImporterFields,
      i18n('entities.candidates.importer.fileName'),
      i18n('entities.candidates.importer.hint'),
    );
  }
}
