import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-item-custom',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>

      <ng-content></ng-content>
    </div>
  `,
})
export class ViewItemCustomComponent {
  @Input()
  label: any;

  @Input()
  value: any;

  get isEmpty() {
    return (
      (!this.value &&
        this.value !== 0 &&
        this.value !== false) ||
      (Array.isArray(this.value) && !this.value.length)
    );
  }
}
