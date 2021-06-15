import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ConnectionLevelApi } from 'src/app/connection-level/connection-level.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-connection-level-form-modal',
  templateUrl: './connection-level-form-modal.component.html',
})
export class ConnectionLevelFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ConnectionLevelFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ConnectionLevelApi.create(values);
      const record = await ConnectionLevelApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.connectionLevel.create.success'),
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
