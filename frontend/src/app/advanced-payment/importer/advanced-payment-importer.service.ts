import { Injectable } from '@angular/core';
import { AdvancedPaymentApi } from 'src/app/advanced-payment/advanced-payment.api';
import advancedPaymentImporterFields from 'src/app/advanced-payment/importer/advanced-payment-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class AdvancedPaymentImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      AdvancedPaymentApi.import,
      advancedPaymentImporterFields,
      i18n('entities.advancedPayment.importer.fileName'),
      i18n('entities.advancedPayment.importer.hint'),
    );
  }
}
