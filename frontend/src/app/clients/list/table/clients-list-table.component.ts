import { Component } from '@angular/core';
import { ClientsListService } from 'src/app/clients/list/clients-list.service';
import { ClientsService } from 'src/app/clients/clients.service';
import { ClientsModel } from 'src/app/clients/clients-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClientsDestroyService } from 'src/app/clients/destroy/clients-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clients-list-table',
  templateUrl: './clients-list-table.component.html',
})
export class ClientsListTableComponent {
  constructor(
    public service: ClientsListService,
    public destroyService: ClientsDestroyService,
    public clientsService: ClientsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ClientsModel.presenter(row, fieldName);
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
    return this.clientsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.clientsService.hasPermissionToDestroy;
  }

  get fields() {
    return ClientsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.clientName.name,
      this.fields.jobCount.name,
      this.fields.clientIndustry.name,

      '_actions',
    ];
  }
}
