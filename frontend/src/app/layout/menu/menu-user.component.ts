import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
})
export class MenuUserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  get apiDocumentationUrl() {
    return environment.apiDocumentationUrl;
  }

  get currentUserNameOrEmailPrefix() {
    return this.authService.currentUserNameOrEmailPrefix;
  }

  get currentUserAvatar() {
    return this.authService.currentUserAvatar;
  }

  get currentTenantName() {
    return (
      this.authService.currentTenant &&
      this.authService.currentTenant.name
    );
  }

  get tenantMode() {
    return environment.tenantMode;
  }

  doSignout() {
    return this.authService.doSignout();
  }
}
