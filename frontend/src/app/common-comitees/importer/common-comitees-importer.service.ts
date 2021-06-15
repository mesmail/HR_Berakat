import { Injectable } from '@angular/core';
import { CommonComiteesApi } from 'src/app/common-comitees/common-comitees.api';
import commonComiteesImporterFields from 'src/app/common-comitees/importer/common-comitees-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CommonComiteesImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CommonComiteesApi.import,
      commonComiteesImporterFields,
      i18n('entities.commonComitees.importer.fileName'),
      i18n('entities.commonComitees.importer.hint'),
    );
  }
}
