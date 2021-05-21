import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { TenantInvitationService } from 'src/app/tenant/invitation/tenant-invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
})
export class InvitationComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public invitationService: TenantInvitationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.invitationService.doAcceptFromAuth(this.token);
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/invitation.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  get loading() {
    return this.invitationService.loading;
  }

  get warningMessage() {
    return this.invitationService.warningMessage;
  }

  doAcceptWithWrongEmail() {
    return this.invitationService.doAcceptFromAuth(
      this.token,
      true,
    );
  }

  get token() {
    return this.route.snapshot.queryParams.token;
  }

  async signout() {
    await this.authService.doSignout();
  }
}
