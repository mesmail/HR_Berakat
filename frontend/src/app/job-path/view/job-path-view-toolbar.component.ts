import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobPathViewService } from 'src/app/job-path/view/job-path-view.service';
import { JobPathService } from 'src/app/job-path/job-path.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { JobPathDestroyService } from 'src/app/job-path/destroy/job-path-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-job-path-view-toolbar',
  templateUrl: './job-path-view-toolbar.component.html',
})
export class JobPathViewToolbarComponent {
  constructor(
    public service: JobPathViewService,
    private jobPathService: JobPathService,
    private destroyService: JobPathDestroyService,
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
    return this.jobPathService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.jobPathService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.jobPathService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
