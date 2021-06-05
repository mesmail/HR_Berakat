import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AdvancedPaymentApi } from 'src/app/advanced-payment/advanced-payment.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-advanced-payment-form-modal',
  templateUrl: './advanced-payment-form-modal.component.html',
})
export class AdvancedPaymentFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      AdvancedPaymentFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await AdvancedPaymentApi.create(values);
      const record = await AdvancedPaymentApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.advancedPayment.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
