import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AdvancedPaymentViewService } from 'src/app/advanced-payment/view/advanced-payment-view.service';
import { AdvancedPaymentService } from 'src/app/advanced-payment/advanced-payment.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AdvancedPaymentDestroyService } from 'src/app/advanced-payment/destroy/advanced-payment-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-advanced-payment-view-toolbar',
  templateUrl: './advanced-payment-view-toolbar.component.html',
})
export class AdvancedPaymentViewToolbarComponent {
  constructor(
    public service: AdvancedPaymentViewService,
    private advancedPaymentService: AdvancedPaymentService,
    private destroyService: AdvancedPaymentDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.advancedPaymentService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.advancedPaymentService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.advancedPaymentService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
