import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TasksDutiesListService } from 'src/app/tasks-duties/list/tasks-duties-list.service';
import { TasksDutiesService } from 'src/app/tasks-duties/tasks-duties.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TasksDutiesDestroyService } from 'src/app/tasks-duties/destroy/tasks-duties-destroy.service';

@Component({
  selector: 'app-tasks-duties-list-toolbar',
  templateUrl: './tasks-duties-list-toolbar.component.html',
})
export class TasksDutiesListToolbarComponent {
  constructor(
    public service: TasksDutiesListService,
    private tasksDutiesService: TasksDutiesService,
    private destroyService: TasksDutiesDestroyService,
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
    return this.tasksDutiesService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.tasksDutiesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tasksDutiesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tasksDutiesService.hasPermissionToImport;
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
