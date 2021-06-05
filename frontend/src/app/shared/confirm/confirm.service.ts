import { Injectable } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ConfirmService {
  constructor(public dialog: MatDialog) {}

  async confirm(
    title?: string,
    yesLabel?: string,
    noLabel?: string,
  ) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: {
        title,
        yesLabel,
        noLabel,
      },
    });

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
