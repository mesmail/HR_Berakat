import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ConnectionLevelViewService } from 'src/app/connection-level/view/connection-level-view.service';
import { ConnectionLevelService } from 'src/app/connection-level/connection-level.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConnectionLevelDestroyService } from 'src/app/connection-level/destroy/connection-level-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-connection-level-view-toolbar',
  templateUrl: './connection-level-view-toolbar.component.html',
})
export class ConnectionLevelViewToolbarComponent {
  constructor(
    public service: ConnectionLevelViewService,
    private connectionLevelService: ConnectionLevelService,
    private destroyService: ConnectionLevelDestroyService,
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
    return this.connectionLevelService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.connectionLevelService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.connectionLevelService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
