import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobFrameworksListService } from 'src/app/job-frameworks/list/job-frameworks-list.service';
import { JobFrameworksService } from 'src/app/job-frameworks/job-frameworks.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobFrameworksDestroyService } from 'src/app/job-frameworks/destroy/job-frameworks-destroy.service';

@Component({
  selector: 'app-job-frameworks-list-toolbar',
  templateUrl: './job-frameworks-list-toolbar.component.html',
})
export class JobFrameworksListToolbarComponent {
  constructor(
    public service: JobFrameworksListService,
    private jobFrameworksService: JobFrameworksService,
    private destroyService: JobFrameworksDestroyService,
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
    return this.jobFrameworksService.hasPermissionToCreate;
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
