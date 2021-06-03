import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AdvancedPaymentListService } from 'src/app/advanced-payment/list/advanced-payment-list.service';
import { AdvancedPaymentService } from 'src/app/advanced-payment/advanced-payment.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AdvancedPaymentDestroyService } from 'src/app/advanced-payment/destroy/advanced-payment-destroy.service';

@Component({
  selector: 'app-advanced-payment-list-toolbar',
  templateUrl: './advanced-payment-list-toolbar.component.html',
})
export class AdvancedPaymentListToolbarComponent {
  constructor(
    public service: AdvancedPaymentListService,
    private advancedPaymentService: AdvancedPaymentService,
    private destroyService: AdvancedPaymentDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.advancedPaymentService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
