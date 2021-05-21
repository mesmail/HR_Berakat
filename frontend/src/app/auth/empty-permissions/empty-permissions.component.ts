import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-empty-permissions',
  templateUrl: './empty-permissions.component.html',
})
export class EmptyPermissionsComponent implements OnInit {
  constructor(public authService: AuthService) {}

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/emptyPermissions.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  ngOnInit() {}

  async signout() {
    await this.authService.doSignout();
  }
}
