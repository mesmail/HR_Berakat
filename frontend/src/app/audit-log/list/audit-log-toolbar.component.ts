import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-audit-log-toolbar',
  templateUrl: './audit-log-toolbar.component.html',
})
export class AuditLogToolbarComponent {
  constructor(private auditLogService: AuditLogService) {}

  doExport() {
    return this.auditLogService.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.auditLogService.hasRows ||
      this.auditLogService.loading ||
      this.auditLogService.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (
      !this.auditLogService.hasRows ||
      this.auditLogService.loading
    ) {
      return i18n('common.noDataToExport');
    }
  }
}
