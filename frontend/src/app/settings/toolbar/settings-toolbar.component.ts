import { Component } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';

@Component({
  selector: 'app-settings-toolbar',
  templateUrl: './settings-toolbar.component.html',
})
export class SettingsToolbarComponent {
  constructor(private auditLogService: AuditLogService) {}

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }
}
