import { Component } from '@angular/core';
import { DepartmentsListService } from 'src/app/departments/list/departments-list.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { DepartmentsModel } from 'src/app/departments/departments-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { DepartmentsDestroyService } from 'src/app/departments/destroy/departments-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-departments-list-table',
  templateUrl: './departments-list-table.component.html',
})
export class DepartmentsListTableComponent {
  constructor(
    public service: DepartmentsListService,
    public destroyService: DepartmentsDestroyService,
    public departmentsService: DepartmentsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return DepartmentsModel.presenter(row, fieldName);
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
    return this.departmentsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.departmentsService.hasPermissionToDestroy;
  }

  get fields() {
    return DepartmentsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.departmentName.name,

      '_actions',
    ];
  }
}
