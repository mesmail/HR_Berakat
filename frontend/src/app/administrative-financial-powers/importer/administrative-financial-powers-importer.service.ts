import { Injectable } from '@angular/core';
import { AdministrativeFinancialPowersApi } from 'src/app/administrative-financial-powers/administrative-financial-powers.api';
import administrativeFinancialPowersImporterFields from 'src/app/administrative-financial-powers/importer/administrative-financial-powers-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class AdministrativeFinancialPowersImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      AdministrativeFinancialPowersApi.import,
      administrativeFinancialPowersImporterFields,
      i18n('entities.administrativeFinancialPowers.importer.fileName'),
      i18n('entities.administrativeFinancialPowers.importer.hint'),
    );
  }
}
