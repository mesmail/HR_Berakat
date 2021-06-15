import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobPathListService } from 'src/app/job-path/list/job-path-list.service';
import { JobPathService } from 'src/app/job-path/job-path.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobPathDestroyService } from 'src/app/job-path/destroy/job-path-destroy.service';

@Component({
  selector: 'app-job-path-list-toolbar',
  templateUrl: './job-path-list-toolbar.component.html',
})
export class JobPathListToolbarComponent {
  constructor(
    public service: JobPathListService,
    private jobPathService: JobPathService,
    private destroyService: JobPathDestroyService,
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
    return this.jobPathService.hasPermissionToCreate;
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
