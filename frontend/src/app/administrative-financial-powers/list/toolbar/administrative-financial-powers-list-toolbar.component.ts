import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AdministrativeFinancialPowersListService } from 'src/app/administrative-financial-powers/list/administrative-financial-powers-list.service';
import { AdministrativeFinancialPowersService } from 'src/app/administrative-financial-powers/administrative-financial-powers.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AdministrativeFinancialPowersDestroyService } from 'src/app/administrative-financial-powers/destroy/administrative-financial-powers-destroy.service';

@Component({
  selector: 'app-administrative-financial-powers-list-toolbar',
  templateUrl: './administrative-financial-powers-list-toolbar.component.html',
})
export class AdministrativeFinancialPowersListToolbarComponent {
  constructor(
    public service: AdministrativeFinancialPowersListService,
    private administrativeFinancialPowersService: AdministrativeFinancialPowersService,
    private destroyService: AdministrativeFinancialPowersDestroyService,
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
    return this.administrativeFinancialPowersService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.administrativeFinancialPowersService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.administrativeFinancialPowersService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.administrativeFinancialPowersService.hasPermissionToImport;
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
