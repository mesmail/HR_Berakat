import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AdvancedPaymentApi } from 'src/app/advanced-payment/advanced-payment.api';
import { AdvancedPaymentListService } from 'src/app/advanced-payment/list/advanced-payment-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AdvancedPaymentDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private advancedPaymentListService: AdvancedPaymentListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await AdvancedPaymentApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.advancedPayment.destroy.success'),
      );

      this.router.navigate(['/advanced-payment']);

      await this.advancedPaymentListService.doFetch(
        this.advancedPaymentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await AdvancedPaymentApi.destroyAll(ids);
      this.loading = false;

      this.advancedPaymentListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.advancedPayment.destroyAll.success'),
      );

      this.router.navigate(['/advanced-payment']);

      return this.advancedPaymentListService.doFetch(
        this.advancedPaymentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
