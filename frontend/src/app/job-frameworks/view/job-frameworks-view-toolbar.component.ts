import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobFrameworksViewService } from 'src/app/job-frameworks/view/job-frameworks-view.service';
import { JobFrameworksService } from 'src/app/job-frameworks/job-frameworks.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { JobFrameworksDestroyService } from 'src/app/job-frameworks/destroy/job-frameworks-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-job-frameworks-view-toolbar',
  templateUrl: './job-frameworks-view-toolbar.component.html',
})
export class JobFrameworksViewToolbarComponent {
  constructor(
    public service: JobFrameworksViewService,
    private jobFrameworksService: JobFrameworksService,
    private destroyService: JobFrameworksDestroyService,
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
    return this.jobFrameworksService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.jobFrameworksService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.jobFrameworksService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
