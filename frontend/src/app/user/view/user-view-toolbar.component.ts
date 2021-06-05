import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { UserViewService } from 'src/app/user/view/user-view.service';
import { UserService } from 'src/app/user/user.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';

@Component({
  selector: 'app-user-view-toolbar',
  templateUrl: './user-view-toolbar.component.html',
})
export class UserViewToolbarComponent {
  constructor(
    public service: UserViewService,
    private userService: UserService,
    private auditLogService: AuditLogService,
  ) {}

  get hasPermissionToEdit() {
    return this.userService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.userService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.user;
  }
}
