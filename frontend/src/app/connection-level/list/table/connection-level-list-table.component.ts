import { Component } from '@angular/core';
import { ConnectionLevelListService } from 'src/app/connection-level/list/connection-level-list.service';
import { ConnectionLevelService } from 'src/app/connection-level/connection-level.service';
import { ConnectionLevelModel } from 'src/app/connection-level/connection-level-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ConnectionLevelDestroyService } from 'src/app/connection-level/destroy/connection-level-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-connection-level-list-table',
  templateUrl: './connection-level-list-table.component.html',
})
export class ConnectionLevelListTableComponent {
  constructor(
    public service: ConnectionLevelListService,
    public destroyService: ConnectionLevelDestroyService,
    public connectionLevelService: ConnectionLevelService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ConnectionLevelModel.presenter(row, fieldName);
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
    return this.connectionLevelService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.connectionLevelService.hasPermissionToDestroy;
  }

  get fields() {
    return ConnectionLevelModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.external.name,
      this.fields.internal.name,

      '_actions',
    ];
  }
}
