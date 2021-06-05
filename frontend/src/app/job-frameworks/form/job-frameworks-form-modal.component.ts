import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobFrameworksApi } from 'src/app/job-frameworks/job-frameworks.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-frameworks-form-modal',
  templateUrl: './job-frameworks-form-modal.component.html',
})
export class JobFrameworksFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      JobFrameworksFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await JobFrameworksApi.create(values);
      const record = await JobFrameworksApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobFrameworks.create.success'),
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
