import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user/list/user-list.service';
import { UserModel } from 'src/app/user/user-model';
import { Roles } from 'src/security/roles';
import { UserService } from 'src/app/user/user.service';
import { i18n } from 'src/i18n';
import { UserDestroyService } from 'src/app/user/destroy/user-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
})
export class UserListTableComponent {
  constructor(
    public service: UserListService,
    public userService: UserService,
    public destroyService: UserDestroyService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return UserModel.presenter(row, fieldName);
  }

  roleDescriptionOf(roleId) {
    return Roles.descriptionOf(roleId);
  }

  roleLabelOf(roleId) {
    return Roles.labelOf(roleId);
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
    return this.userService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.userService.hasPermissionToDestroy;
  }

  get fields() {
    return UserModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.avatars.name,
      this.fields.email.name,
      this.fields.fullName.name,
      this.fields.roles.name,
      this.fields.status.name,
      '_actions',
    ];
  }
}
