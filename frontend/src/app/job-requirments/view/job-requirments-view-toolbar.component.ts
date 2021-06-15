import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobRequirmentsViewService } from 'src/app/job-requirments/view/job-requirments-view.service';
import { JobRequirmentsService } from 'src/app/job-requirments/job-requirments.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { JobRequirmentsDestroyService } from 'src/app/job-requirments/destroy/job-requirments-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-job-requirments-view-toolbar',
  templateUrl: './job-requirments-view-toolbar.component.html',
})
export class JobRequirmentsViewToolbarComponent {
  constructor(
    public service: JobRequirmentsViewService,
    private jobRequirmentsService: JobRequirmentsService,
    private destroyService: JobRequirmentsDestroyService,
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
    return this.jobRequirmentsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.jobRequirmentsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.jobRequirmentsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
