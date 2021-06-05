import { Component } from '@angular/core';
import { ProfessionalCertificationsListService } from 'src/app/professional-certifications/list/professional-certifications-list.service';
import { ProfessionalCertificationsService } from 'src/app/professional-certifications/professional-certifications.service';
import { ProfessionalCertificationsModel } from 'src/app/professional-certifications/professional-certifications-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProfessionalCertificationsDestroyService } from 'src/app/professional-certifications/destroy/professional-certifications-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-professional-certifications-list-table',
  templateUrl: './professional-certifications-list-table.component.html',
})
export class ProfessionalCertificationsListTableComponent {
  constructor(
    public service: ProfessionalCertificationsListService,
    public destroyService: ProfessionalCertificationsDestroyService,
    public professionalCertificationsService: ProfessionalCertificationsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ProfessionalCertificationsModel.presenter(row, fieldName);
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
    return this.professionalCertificationsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.professionalCertificationsService.hasPermissionToDestroy;
  }

  get fields() {
    return ProfessionalCertificationsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.professionalCertifications.name,

      '_actions',
    ];
  }
}
