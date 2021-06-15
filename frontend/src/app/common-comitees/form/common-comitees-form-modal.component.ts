import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CommonComiteesApi } from 'src/app/common-comitees/common-comitees.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-common-comitees-form-modal',
  templateUrl: './common-comitees-form-modal.component.html',
})
export class CommonComiteesFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CommonComiteesFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CommonComiteesApi.create(values);
      const record = await CommonComiteesApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.commonComitees.create.success'),
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
