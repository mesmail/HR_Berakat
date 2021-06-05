import { Component } from '@angular/core';
import { UsersNewListService } from 'src/app/users-new/list/users-new-list.service';
import { UsersNewService } from 'src/app/users-new/users-new.service';
import { UsersNewModel } from 'src/app/users-new/users-new-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { UsersNewDestroyService } from 'src/app/users-new/destroy/users-new-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-users-new-list-table',
  templateUrl: './users-new-list-table.component.html',
})
export class UsersNewListTableComponent {
  constructor(
    public service: UsersNewListService,
    public destroyService: UsersNewDestroyService,
    public usersNewService: UsersNewService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return UsersNewModel.presenter(row, fieldName);
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
    return this.usersNewService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.usersNewService.hasPermissionToDestroy;
  }

  get fields() {
    return UsersNewModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.email.name,
      this.fields.firsrtName.name,
      this.fields.secondName.name,

      '_actions',
    ];
  }
}
