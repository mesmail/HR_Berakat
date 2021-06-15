import { Component } from '@angular/core';
import { JobPathListService } from 'src/app/job-path/list/job-path-list.service';
import { JobPathService } from 'src/app/job-path/job-path.service';
import { JobPathModel } from 'src/app/job-path/job-path-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobPathDestroyService } from 'src/app/job-path/destroy/job-path-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-path-list-table',
  templateUrl: './job-path-list-table.component.html',
})
export class JobPathListTableComponent {
  constructor(
    public service: JobPathListService,
    public destroyService: JobPathDestroyService,
    public jobPathService: JobPathService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return JobPathModel.presenter(row, fieldName);
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
    return this.jobPathService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.jobPathService.hasPermissionToDestroy;
  }

  get fields() {
    return JobPathModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.jobName.name,
      this.fields.promotionIndicators.name,

      '_actions',
    ];
  }
}
