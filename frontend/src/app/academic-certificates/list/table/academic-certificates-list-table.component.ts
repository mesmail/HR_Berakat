import { Component } from '@angular/core';
import { AcademicCertificatesListService } from 'src/app/academic-certificates/list/academic-certificates-list.service';
import { AcademicCertificatesService } from 'src/app/academic-certificates/academic-certificates.service';
import { AcademicCertificatesModel } from 'src/app/academic-certificates/academic-certificates-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AcademicCertificatesDestroyService } from 'src/app/academic-certificates/destroy/academic-certificates-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-academic-certificates-list-table',
  templateUrl: './academic-certificates-list-table.component.html',
})
export class AcademicCertificatesListTableComponent {
  constructor(
    public service: AcademicCertificatesListService,
    public destroyService: AcademicCertificatesDestroyService,
    public academicCertificatesService: AcademicCertificatesService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return AcademicCertificatesModel.presenter(row, fieldName);
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
    return this.academicCertificatesService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.academicCertificatesService.hasPermissionToDestroy;
  }

  get fields() {
    return AcademicCertificatesModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.academicCertificates.name,

      '_actions',
    ];
  }
}
