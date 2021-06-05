import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-view-item-relation-to-one',
  template: `
    <div *ngIf="!isEmpty" class="view-item">
      <div class="view-item--label">
        {{ label }}
      </div>

      <a
        class="app-link"
        *ngIf="hasPermissionToRead"
        [routerLink]="[this.urlWithId]"
        >{{ this.display }}</a
      >

      <span *ngIf="!hasPermissionToRead">{{
        this.display
      }}</span>
    </div>
  `,
})
export class ViewItemRelationToOneComponent {
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
    return !this.value || !this.value.id;
  }

  get urlWithId() {
    return `${this.url}/${this.value.id}`;
  }

  get display() {
    return this.value.label;
  }
}
