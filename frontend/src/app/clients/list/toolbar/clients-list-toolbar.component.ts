import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClientsListService } from 'src/app/clients/list/clients-list.service';
import { ClientsService } from 'src/app/clients/clients.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClientsDestroyService } from 'src/app/clients/destroy/clients-destroy.service';

@Component({
  selector: 'app-clients-list-toolbar',
  templateUrl: './clients-list-toolbar.component.html',
})
export class ClientsListToolbarComponent {
  constructor(
    public service: ClientsListService,
    private clientsService: ClientsService,
    private destroyService: ClientsDestroyService,
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
    return this.clientsService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.clientsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.clientsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.clientsService.hasPermissionToImport;
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
