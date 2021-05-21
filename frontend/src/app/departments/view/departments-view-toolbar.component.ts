import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { DepartmentsViewService } from 'src/app/departments/view/departments-view.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { DepartmentsDestroyService } from 'src/app/departments/destroy/departments-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-departments-view-toolbar',
  templateUrl: './departments-view-toolbar.component.html',
})
export class DepartmentsViewToolbarComponent {
  constructor(
    public service: DepartmentsViewService,
    private departmentsService: DepartmentsService,
    private destroyService: DepartmentsDestroyService,
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
    return this.departmentsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.departmentsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.departmentsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
