import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { EmploymentContractApi } from 'src/app/employment-contract/employment-contract.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-employment-contract-form-modal',
  templateUrl: './employment-contract-form-modal.component.html',
})
export class EmploymentContractFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      EmploymentContractFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await EmploymentContractApi.create(values);
      const record = await EmploymentContractApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.employmentContract.create.success'),
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
