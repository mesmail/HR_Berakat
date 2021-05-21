import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-item-text',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>
      <div *ngIf="prefix">{{ prefix }} {{ value }}</div>
      <div *ngIf="!prefix">{{ value }}</div>
    </div>
  `,
})
export class ViewItemTextComponent {
  @Input()
  label: any;

  @Input()
  value: any;

  @Input()
  prefix: any;

  get isEmpty() {
    return (
      !this.value &&
      this.value !== 0 &&
      this.value !== false
    );
  }
}
