import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-view-item-relation-to-many',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>

      <div *ngFor="let item of value">
        <a
          class="app-link"
          *ngIf="hasPermissionToRead"
          [routerLink]="[urlWithId(item)]"
          >{{ display(item) }}</a
        >

        <span *ngIf="!hasPermissionToRead">{{
          display(item)
        }}</span>
      </div>
    </div>
  `,
})
export class ViewItemRelationToManyComponent {
  @Input()
  label: any;
  @Input()
  value: any;
  @Input()
  url: any;
  @Input()
  permission: any;

  constructor(private authService: AuthService) {}

  get hasPermissionToRead() {
    return this.authService.hasPermission(this.permission);
  }

  get isEmpty() {
    return !this.value || !this.value.length;
  }

  urlWithId(item) {
    return `${this.url}/${item.id}`;
  }

  display(item) {
    return item.label;
  }
}
