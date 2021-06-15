import { Component } from '@angular/core';
import { CommonComiteesListService } from 'src/app/common-comitees/list/common-comitees-list.service';
import { CommonComiteesService } from 'src/app/common-comitees/common-comitees.service';
import { CommonComiteesModel } from 'src/app/common-comitees/common-comitees-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CommonComiteesDestroyService } from 'src/app/common-comitees/destroy/common-comitees-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-common-comitees-list-table',
  templateUrl: './common-comitees-list-table.component.html',
})
export class CommonComiteesListTableComponent {
  constructor(
    public service: CommonComiteesListService,
    public destroyService: CommonComiteesDestroyService,
    public commonComiteesService: CommonComiteesService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CommonComiteesModel.presenter(row, fieldName);
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
    return this.commonComiteesService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.commonComiteesService.hasPermissionToDestroy;
  }

  get fields() {
    return CommonComiteesModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.addedCommittee.name,
      this.fields.menus.name,

      '_actions',
    ];
  }
}
