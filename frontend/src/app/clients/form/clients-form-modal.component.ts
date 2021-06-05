import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClientsApi } from 'src/app/clients/clients.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clients-form-modal',
  templateUrl: './clients-form-modal.component.html',
})
export class ClientsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ClientsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ClientsApi.create(values);
      const record = await ClientsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.clients.create.success'),
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
