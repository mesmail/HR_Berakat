import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CandidatesApi } from 'src/app/candidates/candidates.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-candidates-form-modal',
  templateUrl: './candidates-form-modal.component.html',
})
export class CandidatesFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CandidatesFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CandidatesApi.create(values);
      const record = await CandidatesApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.candidates.create.success'),
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
