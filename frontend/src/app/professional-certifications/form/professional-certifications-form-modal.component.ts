import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProfessionalCertificationsApi } from 'src/app/professional-certifications/professional-certifications.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-professional-certifications-form-modal',
  templateUrl: './professional-certifications-form-modal.component.html',
})
export class ProfessionalCertificationsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ProfessionalCertificationsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ProfessionalCertificationsApi.create(values);
      const record = await ProfessionalCertificationsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.professionalCertifications.create.success'),
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
