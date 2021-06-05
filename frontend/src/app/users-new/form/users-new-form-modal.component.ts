import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { UsersNewApi } from 'src/app/users-new/users-new.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-users-new-form-modal',
  templateUrl: './users-new-form-modal.component.html',
})
export class UsersNewFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      UsersNewFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await UsersNewApi.create(values);
      const record = await UsersNewApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.usersNew.create.success'),
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
