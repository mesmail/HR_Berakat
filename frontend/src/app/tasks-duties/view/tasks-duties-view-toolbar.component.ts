import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TasksDutiesViewService } from 'src/app/tasks-duties/view/tasks-duties-view.service';
import { TasksDutiesService } from 'src/app/tasks-duties/tasks-duties.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TasksDutiesDestroyService } from 'src/app/tasks-duties/destroy/tasks-duties-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-tasks-duties-view-toolbar',
  templateUrl: './tasks-duties-view-toolbar.component.html',
})
export class TasksDutiesViewToolbarComponent {
  constructor(
    public service: TasksDutiesViewService,
    private tasksDutiesService: TasksDutiesService,
    private destroyService: TasksDutiesDestroyService,
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
    return this.tasksDutiesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tasksDutiesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tasksDutiesService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
