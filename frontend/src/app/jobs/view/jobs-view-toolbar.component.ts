import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobsViewService } from 'src/app/jobs/view/jobs-view.service';
import { JobsService } from 'src/app/jobs/jobs.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { JobsDestroyService } from 'src/app/jobs/destroy/jobs-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-jobs-view-toolbar',
  templateUrl: './jobs-view-toolbar.component.html',
})
export class JobsViewToolbarComponent {
  constructor(
    public service: JobsViewService,
    private jobsService: JobsService,
    private destroyService: JobsDestroyService,
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
    return this.jobsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.jobsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.jobsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
