import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { LeaveApplicationFormApi } from 'src/app/leave-application-form/leave-application-form.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-leave-application-form-form-modal',
  templateUrl: './leave-application-form-form-modal.component.html',
})
export class LeaveApplicationFormFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      LeaveApplicationFormFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await LeaveApplicationFormApi.create(values);
      const record = await LeaveApplicationFormApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.leaveApplicationForm.create.success'),
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
