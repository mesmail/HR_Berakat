import { Injectable } from '@angular/core';
import { ClaimApi } from 'src/app/claim/claim.api';
import claimImporterFields from 'src/app/claim/importer/claim-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ClaimImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ClaimApi.import,
      claimImporterFields,
      i18n('entities.claim.importer.fileName'),
      i18n('entities.claim.importer.hint'),
    );
  }
}
