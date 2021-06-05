import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AcademicCertificatesApi } from 'src/app/academic-certificates/academic-certificates.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-academic-certificates-form-modal',
  templateUrl: './academic-certificates-form-modal.component.html',
})
export class AcademicCertificatesFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      AcademicCertificatesFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await AcademicCertificatesApi.create(values);
      const record = await AcademicCertificatesApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.academicCertificates.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
