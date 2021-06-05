import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { DepartmentsApi } from 'src/app/departments/departments.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-departments-form-modal',
  templateUrl: './departments-form-modal.component.html',
})
export class DepartmentsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      DepartmentsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await DepartmentsApi.create(values);
      const record = await DepartmentsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.departments.create.success'),
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
