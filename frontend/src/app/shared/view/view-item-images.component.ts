import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-item-images',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>

      <div class="row">
        <div
          *ngFor="let item of valueAsArray"
          class="col-xs-6"
        >
          <div class="view-item-image-container">
            <a [href]="item.downloadUrl" target="_blank">
              <img
                [src]="item.downloadUrl"
                [alt]="item.name"
                class="view-item-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ViewItemImagesComponent {
  @Input()
  label: any;

  @Input()
  value: any;

  get isEmpty() {
    return !this.valueAsArray.length;
  }

  get valueAsArray() {
    const value = this.value;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  }
}
