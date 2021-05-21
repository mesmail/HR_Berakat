import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { UsersNewViewService } from 'src/app/users-new/view/users-new-view.service';
import { UsersNewService } from 'src/app/users-new/users-new.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { UsersNewDestroyService } from 'src/app/users-new/destroy/users-new-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-users-new-view-toolbar',
  templateUrl: './users-new-view-toolbar.component.html',
})
export class UsersNewViewToolbarComponent {
  constructor(
    public service: UsersNewViewService,
    private usersNewService: UsersNewService,
    private destroyService: UsersNewDestroyService,
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
    return this.usersNewService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.usersNewService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.usersNewService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
