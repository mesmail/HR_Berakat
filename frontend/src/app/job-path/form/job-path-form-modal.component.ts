import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobPathApi } from 'src/app/job-path/job-path.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-path-form-modal',
  templateUrl: './job-path-form-modal.component.html',
})
export class JobPathFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      JobPathFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await JobPathApi.create(values);
      const record = await JobPathApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobPath.create.success'),
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
