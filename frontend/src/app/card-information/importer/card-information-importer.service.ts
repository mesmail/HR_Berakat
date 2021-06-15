import { Injectable } from '@angular/core';
import { CardInformationApi } from 'src/app/card-information/card-information.api';
import cardInformationImporterFields from 'src/app/card-information/importer/card-information-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CardInformationImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CardInformationApi.import,
      cardInformationImporterFields,
      i18n('entities.cardInformation.importer.fileName'),
      i18n('entities.cardInformation.importer.hint'),
    );
  }
}
