import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClientsViewService } from 'src/app/clients/view/clients-view.service';
import { ClientsService } from 'src/app/clients/clients.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ClientsDestroyService } from 'src/app/clients/destroy/clients-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-clients-view-toolbar',
  templateUrl: './clients-view-toolbar.component.html',
})
export class ClientsViewToolbarComponent {
  constructor(
    public service: ClientsViewService,
    private clientsService: ClientsService,
    private destroyService: ClientsDestroyService,
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
    return this.clientsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.clientsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.clientsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
