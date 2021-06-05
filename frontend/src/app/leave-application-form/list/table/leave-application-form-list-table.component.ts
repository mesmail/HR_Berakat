import { Component } from '@angular/core';
import { LeaveApplicationFormListService } from 'src/app/leave-application-form/list/leave-application-form-list.service';
import { LeaveApplicationFormService } from 'src/app/leave-application-form/leave-application-form.service';
import { LeaveApplicationFormModel } from 'src/app/leave-application-form/leave-application-form-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { LeaveApplicationFormDestroyService } from 'src/app/leave-application-form/destroy/leave-application-form-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-leave-application-form-list-table',
  templateUrl: './leave-application-form-list-table.component.html',
})
export class LeaveApplicationFormListTableComponent {
  constructor(
    public service: LeaveApplicationFormListService,
    public destroyService: LeaveApplicationFormDestroyService,
    public leaveApplicationFormService: LeaveApplicationFormService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return LeaveApplicationFormModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.leaveApplicationFormService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.leaveApplicationFormService.hasPermissionToDestroy;
  }

  get fields() {
    return LeaveApplicationFormModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.name.name,
      this.fields.position.name,
      this.fields.department.name,
      this.fields.date.name,
      this.fields.contactNo.name,
      this.fields.employeeNo.name,
      this.fields.absenceWork.name,
      this.fields.period.name,
      this.fields.specify.name,
      this.fields.reasons.name,
      this.fields.others.name,
      this.fields.noDays.name,
      this.fields.noTaken.name,
      this.fields.noBalance.name,
      this.fields.remarks.name,
      this.fields.status.name,
      this.fields.jobs.name,

      '_actions',
    ];
  }
}
