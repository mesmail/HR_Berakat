import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TellProblemApi } from 'src/app/tell-problem/tell-problem.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tell-problem-form-modal',
  templateUrl: './tell-problem-form-modal.component.html',
})
export class TellProblemFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TellProblemFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TellProblemApi.create(values);
      const record = await TellProblemApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.tellProblem.create.success'),
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
