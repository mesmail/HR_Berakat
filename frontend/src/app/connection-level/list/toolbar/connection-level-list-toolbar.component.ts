import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ConnectionLevelListService } from 'src/app/connection-level/list/connection-level-list.service';
import { ConnectionLevelService } from 'src/app/connection-level/connection-level.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ConnectionLevelDestroyService } from 'src/app/connection-level/destroy/connection-level-destroy.service';

@Component({
  selector: 'app-connection-level-list-toolbar',
  templateUrl: './connection-level-list-toolbar.component.html',
})
export class ConnectionLevelListToolbarComponent {
  constructor(
    public service: ConnectionLevelListService,
    private connectionLevelService: ConnectionLevelService,
    private destroyService: ConnectionLevelDestroyService,
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
    return this.connectionLevelService.hasPermissionToCreate;
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
