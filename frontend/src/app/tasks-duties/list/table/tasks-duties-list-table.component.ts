import { Component } from '@angular/core';
import { TasksDutiesListService } from 'src/app/tasks-duties/list/tasks-duties-list.service';
import { TasksDutiesService } from 'src/app/tasks-duties/tasks-duties.service';
import { TasksDutiesModel } from 'src/app/tasks-duties/tasks-duties-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TasksDutiesDestroyService } from 'src/app/tasks-duties/destroy/tasks-duties-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tasks-duties-list-table',
  templateUrl: './tasks-duties-list-table.component.html',
})
export class TasksDutiesListTableComponent {
  constructor(
    public service: TasksDutiesListService,
    public destroyService: TasksDutiesDestroyService,
    public tasksDutiesService: TasksDutiesService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TasksDutiesModel.presenter(row, fieldName);
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
    return this.tasksDutiesService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.tasksDutiesService.hasPermissionToDestroy;
  }

  get fields() {
    return TasksDutiesModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.tasksDuties.name,

      '_actions',
    ];
  }
}
