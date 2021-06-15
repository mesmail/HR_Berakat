import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AdministrativeFinancialPowersApi } from 'src/app/administrative-financial-powers/administrative-financial-powers.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-administrative-financial-powers-form-modal',
  templateUrl: './administrative-financial-powers-form-modal.component.html',
})
export class AdministrativeFinancialPowersFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      AdministrativeFinancialPowersFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await AdministrativeFinancialPowersApi.create(values);
      const record = await AdministrativeFinancialPowersApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.administrativeFinancialPowers.create.success'),
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
