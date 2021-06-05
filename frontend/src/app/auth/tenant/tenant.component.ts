import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
})
export class TenantComponent implements OnInit {
  view = 'form';

  constructor(public authService: AuthService) {}

  ngOnInit() {
    if (this.authService.invitedTenants.length) {
      this.view = 'select';
    }
  }

  async signout() {
    await this.authService.doSignout();
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/tenant.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  doToggleView() {
    this.view = this.view === 'form' ? 'select' : 'form';
  }
}
