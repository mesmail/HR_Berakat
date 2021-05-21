import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-item-images',
  template: `
    <app-avatar
      [src]="
        valueAsArray.length
          ? valueAsArray[0].downloadUrl
          : undefined
      "
      [alt]="
        valueAsArray.length
          ? valueAsArray[0].name
          : undefined
      "
    ></app-avatar>
  `,
})
export class TableItemImagesComponent {
  @Input()
  value: any;

  get valueAsArray() {
    if (!this.value) {
      return [];
    }

    if (Array.isArray(this.value)) {
      return this.value;
    }

    return [this.value];
  }
}
