import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { LeaveApplicationFormListService } from 'src/app/leave-application-form/list/leave-application-form-list.service';
import { LeaveApplicationFormService } from 'src/app/leave-application-form/leave-application-form.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { LeaveApplicationFormDestroyService } from 'src/app/leave-application-form/destroy/leave-application-form-destroy.service';

@Component({
  selector: 'app-leave-application-form-list-toolbar',
  templateUrl: './leave-application-form-list-toolbar.component.html',
})
export class LeaveApplicationFormListToolbarComponent {
  constructor(
    public service: LeaveApplicationFormListService,
    private leaveApplicationFormService: LeaveApplicationFormService,
    private destroyService: LeaveApplicationFormDestroyService,
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
    return this.leaveApplicationFormService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.leaveApplicationFormService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.leaveApplicationFormService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.leaveApplicationFormService.hasPermissionToImport;
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
