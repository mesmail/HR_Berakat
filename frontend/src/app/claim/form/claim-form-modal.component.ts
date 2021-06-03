import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClaimApi } from 'src/app/claim/claim.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-claim-form-modal',
  templateUrl: './claim-form-modal.component.html',
})
export class ClaimFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ClaimFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ClaimApi.create(values);
      const record = await ClaimApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.claim.create.success'),
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
