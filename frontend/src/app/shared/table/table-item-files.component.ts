import { Component, Input } from '@angular/core';
import { truncate } from 'lodash';

@Component({
  selector: 'app-table-item-files',
  template: `
    <div class="table-item-file-list">
      <div
        class="table-item-file-list-item"
        *ngFor="let item of valueWithNamesTruncated"
      >
        <a
          class="table-item-file-list-item-name app-link"
          [href]="item.downloadUrl"
          target="_blank"
          download
        >
          <mat-icon>attach_file</mat-icon>
          {{ item.name }}
        </a>
      </div>
    </div>
  `,
})
export class TableItemFilesComponent {
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

  get valueWithNamesTruncated() {
    return this.valueAsArray.map((value) => ({
      id: value.id,
      name: truncate(value.name),
      downloadUrl: value.downloadUrl,
    }));
  }
}
