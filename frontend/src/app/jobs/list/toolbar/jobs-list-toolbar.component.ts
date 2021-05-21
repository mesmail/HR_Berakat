import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobsListService } from 'src/app/jobs/list/jobs-list.service';
import { JobsService } from 'src/app/jobs/jobs.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobsDestroyService } from 'src/app/jobs/destroy/jobs-destroy.service';

@Component({
  selector: 'app-jobs-list-toolbar',
  templateUrl: './jobs-list-toolbar.component.html',
})
export class JobsListToolbarComponent {
  constructor(
    public service: JobsListService,
    private jobsService: JobsService,
    private destroyService: JobsDestroyService,
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
    return this.jobsService.hasPermissionToCreate;
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
