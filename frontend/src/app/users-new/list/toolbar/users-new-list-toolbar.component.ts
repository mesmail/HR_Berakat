import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { UsersNewListService } from 'src/app/users-new/list/users-new-list.service';
import { UsersNewService } from 'src/app/users-new/users-new.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { UsersNewDestroyService } from 'src/app/users-new/destroy/users-new-destroy.service';

@Component({
  selector: 'app-users-new-list-toolbar',
  templateUrl: './users-new-list-toolbar.component.html',
})
export class UsersNewListToolbarComponent {
  constructor(
    public service: UsersNewListService,
    private usersNewService: UsersNewService,
    private destroyService: UsersNewDestroyService,
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
    return this.usersNewService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.usersNewService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.usersNewService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.usersNewService.hasPermissionToImport;
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
