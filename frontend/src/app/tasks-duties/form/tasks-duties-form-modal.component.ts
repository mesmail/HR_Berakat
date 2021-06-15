import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TasksDutiesApi } from 'src/app/tasks-duties/tasks-duties.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tasks-duties-form-modal',
  templateUrl: './tasks-duties-form-modal.component.html',
})
export class TasksDutiesFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      TasksDutiesFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await TasksDutiesApi.create(values);
      const record = await TasksDutiesApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.tasksDuties.create.success'),
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
