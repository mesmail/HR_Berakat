import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { UserListService } from 'src/app/user/list/user-list.service';
import { UserService } from 'src/app/user/user.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { UserDestroyService } from 'src/app/user/destroy/user-destroy.service';

@Component({
  selector: 'app-user-list-toolbar',
  templateUrl: './user-list-toolbar.component.html',
})
export class UserListToolbarComponent {
  constructor(
    private service: UserListService,
    private userService: UserService,
    private destroyService: UserDestroyService,
    private auditLogService: AuditLogService,
  ) {}

  doExport() {
    return this.service.doExport();
  }

  doDestroyAllSelected() {
    return this.destroyService.doDestroyAll(
      this.service.selectedRows.map((item) => item.id),
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.userService.hasPermissionToCreate;
  }

  get hasPermissionToEdit() {
    return this.userService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.userService.hasPermissionToImport;
  }

  get hasPermissionToDestroy() {
    return this.userService.hasPermissionToDestroy;
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows) {
      return i18n('common.noDataToExport');
    }
  }

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    );
  }

  get destroyButtonTooltip() {
    if (this.service.selectedKeys.isEmpty()) {
      return i18n('common.mustSelectARow');
    }
  }
}
