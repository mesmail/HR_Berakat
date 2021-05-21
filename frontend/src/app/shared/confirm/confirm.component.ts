import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmData {
  title: string;
  yesLabel: string;
  noLabel: string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmData,
  ) {}
}
