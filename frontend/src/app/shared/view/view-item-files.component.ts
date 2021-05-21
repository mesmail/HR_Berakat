import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-item-files',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>

      <div *ngIf="value && value.length">
        <div class="view-item-file-list">
          <div
            class="view-item-file-list-item"
            *ngFor="let item of valueAsArray"
          >
            <mat-icon>attach_file</mat-icon>

            <a
              class="view-item-file-list-item-name"
              [href]="item.downloadUrl"
              target="_blank"
              download
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ViewItemFilesComponent {
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
