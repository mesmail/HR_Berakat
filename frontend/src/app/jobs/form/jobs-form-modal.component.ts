import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobsApi } from 'src/app/jobs/jobs.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-jobs-form-modal',
  templateUrl: './jobs-form-modal.component.html',
})
export class JobsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      JobsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await JobsApi.create(values);
      const record = await JobsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobs.create.success'),
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
