import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CardInformationApi } from 'src/app/card-information/card-information.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-card-information-form-modal',
  templateUrl: './card-information-form-modal.component.html',
})
export class CardInformationFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CardInformationFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CardInformationApi.create(values);
      const record = await CardInformationApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.cardInformation.create.success'),
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
