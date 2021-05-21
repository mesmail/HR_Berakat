import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-table-item-relation-to-one',
  template: `
    <div *ngIf="!isEmpty">
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
export class TableItemRelationToOneComponent {
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
