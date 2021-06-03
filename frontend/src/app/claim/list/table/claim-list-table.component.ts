import { Component } from '@angular/core';
import { ClaimListService } from 'src/app/claim/list/claim-list.service';
import { ClaimService } from 'src/app/claim/claim.service';
import { ClaimModel } from 'src/app/claim/claim-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClaimDestroyService } from 'src/app/claim/destroy/claim-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-claim-list-table',
  templateUrl: './claim-list-table.component.html',
})
export class ClaimListTableComponent {
  constructor(
    public service: ClaimListService,
    public destroyService: ClaimDestroyService,
    public claimService: ClaimService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ClaimModel.presenter(row, fieldName);
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
    return this.claimService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.claimService.hasPermissionToDestroy;
  }

  get fields() {
    return ClaimModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.problemDescription.name,

      '_actions',
    ];
  }
}
