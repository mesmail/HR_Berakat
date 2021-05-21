import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TrainingCertificatesApi } from 'src/app/training-certificates/training-certificates.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-training-certificates-form-modal',
  templateUrl: './training-certificates-form-modal.component.html',
})
export class TrainingCertificatesFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TrainingCertificatesFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TrainingCertificatesApi.create(values);
      const record = await TrainingCertificatesApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.trainingCertificates.create.success'),
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
