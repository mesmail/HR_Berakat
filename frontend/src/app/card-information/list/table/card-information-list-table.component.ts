import { Component } from '@angular/core';
import { CardInformationListService } from 'src/app/card-information/list/card-information-list.service';
import { CardInformationService } from 'src/app/card-information/card-information.service';
import { CardInformationModel } from 'src/app/card-information/card-information-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CardInformationDestroyService } from 'src/app/card-information/destroy/card-information-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-card-information-list-table',
  templateUrl: './card-information-list-table.component.html',
})
export class CardInformationListTableComponent {
  constructor(
    public service: CardInformationListService,
    public destroyService: CardInformationDestroyService,
    public cardInformationService: CardInformationService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CardInformationModel.presenter(row, fieldName);
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
    return this.cardInformationService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.cardInformationService.hasPermissionToDestroy;
  }

  get fields() {
    return CardInformationModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.version.name,
      this.fields.date.name,
      this.fields.generalManager.name,
      this.fields.hRManager.name,

      '_actions',
    ];
  }
}
