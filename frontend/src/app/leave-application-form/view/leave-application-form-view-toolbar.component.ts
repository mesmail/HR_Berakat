import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { LeaveApplicationFormViewService } from 'src/app/leave-application-form/view/leave-application-form-view.service';
import { LeaveApplicationFormService } from 'src/app/leave-application-form/leave-application-form.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { LeaveApplicationFormDestroyService } from 'src/app/leave-application-form/destroy/leave-application-form-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-leave-application-form-view-toolbar',
  templateUrl: './leave-application-form-view-toolbar.component.html',
})
export class LeaveApplicationFormViewToolbarComponent {
  constructor(
    public service: LeaveApplicationFormViewService,
    private leaveApplicationFormService: LeaveApplicationFormService,
    private destroyService: LeaveApplicationFormDestroyService,
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
    return this.leaveApplicationFormService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.leaveApplicationFormService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.leaveApplicationFormService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
