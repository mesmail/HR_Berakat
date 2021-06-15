import { Component } from '@angular/core';
import { AdministrativeFinancialPowersListService } from 'src/app/administrative-financial-powers/list/administrative-financial-powers-list.service';
import { AdministrativeFinancialPowersService } from 'src/app/administrative-financial-powers/administrative-financial-powers.service';
import { AdministrativeFinancialPowersModel } from 'src/app/administrative-financial-powers/administrative-financial-powers-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AdministrativeFinancialPowersDestroyService } from 'src/app/administrative-financial-powers/destroy/administrative-financial-powers-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-administrative-financial-powers-list-table',
  templateUrl: './administrative-financial-powers-list-table.component.html',
})
export class AdministrativeFinancialPowersListTableComponent {
  constructor(
    public service: AdministrativeFinancialPowersListService,
    public destroyService: AdministrativeFinancialPowersDestroyService,
    public administrativeFinancialPowersService: AdministrativeFinancialPowersService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return AdministrativeFinancialPowersModel.presenter(row, fieldName);
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
    return this.administrativeFinancialPowersService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.administrativeFinancialPowersService.hasPermissionToDestroy;
  }

  get fields() {
    return AdministrativeFinancialPowersModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.administrativeFinancialPowers.name,

      '_actions',
    ];
  }
}
