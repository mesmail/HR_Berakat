import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { UserApi } from '../user.api';

@Component({
  selector: 'app-user-new-form-modal',
  templateUrl: './user-new-form-modal.component.html',
})
export class UserNewFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      UserNewFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      await UserApi.create(values);

      const { rows } = await UserApi.fetchUsers(
        {
          email: values.emails[0],
        },
        null,
        1,
        0,
      );

      this.saveLoading = false;
      this.snackbar.success(i18n('user.doAddSuccess'));

      if (this.dialogRef) {
        this.dialogRef.close(rows[0]);
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
