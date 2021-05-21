import { Component } from '@angular/core';
import { JobFrameworksListService } from 'src/app/job-frameworks/list/job-frameworks-list.service';
import { JobFrameworksService } from 'src/app/job-frameworks/job-frameworks.service';
import { JobFrameworksModel } from 'src/app/job-frameworks/job-frameworks-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobFrameworksDestroyService } from 'src/app/job-frameworks/destroy/job-frameworks-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-frameworks-list-table',
  templateUrl: './job-frameworks-list-table.component.html',
})
export class JobFrameworksListTableComponent {
  constructor(
    public service: JobFrameworksListService,
    public destroyService: JobFrameworksDestroyService,
    public jobFrameworksService: JobFrameworksService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return JobFrameworksModel.presenter(row, fieldName);
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
    return this.jobFrameworksService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.jobFrameworksService.hasPermissionToDestroy;
  }

  get fields() {
    return JobFrameworksModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.takeMultipleTasks.name,
      this.fields.impactSalary.name,
      this.fields.impactJobGrade.name,

      '_actions',
    ];
  }
}
