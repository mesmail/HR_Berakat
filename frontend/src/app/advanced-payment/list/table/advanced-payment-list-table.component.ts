import { Component } from '@angular/core';
import { AdvancedPaymentListService } from 'src/app/advanced-payment/list/advanced-payment-list.service';
import { AdvancedPaymentService } from 'src/app/advanced-payment/advanced-payment.service';
import { AdvancedPaymentModel } from 'src/app/advanced-payment/advanced-payment-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AdvancedPaymentDestroyService } from 'src/app/advanced-payment/destroy/advanced-payment-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-advanced-payment-list-table',
  templateUrl: './advanced-payment-list-table.component.html',
})
export class AdvancedPaymentListTableComponent {
  constructor(
    public service: AdvancedPaymentListService,
    public destroyService: AdvancedPaymentDestroyService,
    public advancedPaymentService: AdvancedPaymentService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return AdvancedPaymentModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.advancedPaymentService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.advancedPaymentService.hasPermissionToDestroy;
  }

  get fields() {
    return AdvancedPaymentModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.amount.name,
      this.fields.dateRequired.name,
      this.fields.paymentReason.name,

      '_actions',
    ];
  }
}
