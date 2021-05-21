import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { DepartmentsListService } from 'src/app/departments/list/departments-list.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { DepartmentsDestroyService } from 'src/app/departments/destroy/departments-destroy.service';

@Component({
  selector: 'app-departments-list-toolbar',
  templateUrl: './departments-list-toolbar.component.html',
})
export class DepartmentsListToolbarComponent {
  constructor(
    public service: DepartmentsListService,
    private departmentsService: DepartmentsService,
    private destroyService: DepartmentsDestroyService,
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
    return this.departmentsService.hasPermissionToCreate;
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
