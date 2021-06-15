import { Component } from '@angular/core';
import { JobRequirmentsListService } from 'src/app/job-requirments/list/job-requirments-list.service';
import { JobRequirmentsService } from 'src/app/job-requirments/job-requirments.service';
import { JobRequirmentsModel } from 'src/app/job-requirments/job-requirments-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobRequirmentsDestroyService } from 'src/app/job-requirments/destroy/job-requirments-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-requirments-list-table',
  templateUrl: './job-requirments-list-table.component.html',
})
export class JobRequirmentsListTableComponent {
  constructor(
    public service: JobRequirmentsListService,
    public destroyService: JobRequirmentsDestroyService,
    public jobRequirmentsService: JobRequirmentsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return JobRequirmentsModel.presenter(row, fieldName);
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
    return this.jobRequirmentsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.jobRequirmentsService.hasPermissionToDestroy;
  }

  get fields() {
    return JobRequirmentsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.tactLevel.name,
      this.fields.experienceYears.name,
      this.fields.minKPI.name,

      '_actions',
    ];
  }
}
