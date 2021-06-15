import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobRequirmentsApi } from 'src/app/job-requirments/job-requirments.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-requirments-form-modal',
  templateUrl: './job-requirments-form-modal.component.html',
})
export class JobRequirmentsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      JobRequirmentsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await JobRequirmentsApi.create(values);
      const record = await JobRequirmentsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobRequirments.create.success'),
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
