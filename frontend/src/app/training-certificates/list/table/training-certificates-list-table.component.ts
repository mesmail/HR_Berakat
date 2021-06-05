import { Component } from '@angular/core';
import { TrainingCertificatesListService } from 'src/app/training-certificates/list/training-certificates-list.service';
import { TrainingCertificatesService } from 'src/app/training-certificates/training-certificates.service';
import { TrainingCertificatesModel } from 'src/app/training-certificates/training-certificates-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TrainingCertificatesDestroyService } from 'src/app/training-certificates/destroy/training-certificates-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-training-certificates-list-table',
  templateUrl: './training-certificates-list-table.component.html',
})
export class TrainingCertificatesListTableComponent {
  constructor(
    public service: TrainingCertificatesListService,
    public destroyService: TrainingCertificatesDestroyService,
    public trainingCertificatesService: TrainingCertificatesService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TrainingCertificatesModel.presenter(row, fieldName);
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
    return this.trainingCertificatesService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.trainingCertificatesService.hasPermissionToDestroy;
  }

  get fields() {
    return TrainingCertificatesModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.trainingCertificates.name,

      '_actions',
    ];
  }
}
