import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobRequirmentsListService } from 'src/app/job-requirments/list/job-requirments-list.service';
import { JobRequirmentsService } from 'src/app/job-requirments/job-requirments.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobRequirmentsDestroyService } from 'src/app/job-requirments/destroy/job-requirments-destroy.service';

@Component({
  selector: 'app-job-requirments-list-toolbar',
  templateUrl: './job-requirments-list-toolbar.component.html',
})
export class JobRequirmentsListToolbarComponent {
  constructor(
    public service: JobRequirmentsListService,
    private jobRequirmentsService: JobRequirmentsService,
    private destroyService: JobRequirmentsDestroyService,
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
    return this.jobRequirmentsService.hasPermissionToCreate;
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
