import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdvancedPaymentFormModalComponent } from 'src/app/advanced-payment/form/advanced-payment-form-modal.component';

@Injectable()
export class AdvancedPaymentFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      AdvancedPaymentFormModalComponent,
      {
        width: '80%',
      },
    );

    return new Promise((resolve) => {
      const subscription = dialogRef
        .afterClosed()
        .subscribe((result) => {
          resolve(result);

          if (subscription && !subscription.closed) {
            subscription.unsubscribe();
          }
        });
    });
  }
}
