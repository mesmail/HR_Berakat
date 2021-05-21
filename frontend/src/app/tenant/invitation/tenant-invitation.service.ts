import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import AuthInvitationToken from 'src/app/auth/auth-invitation-token';
import { AuthService } from 'src/app/auth/auth.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { TenantApi } from 'src/app/tenant/tenant.api';
import { i18n } from 'src/i18n';
import { TenantListService } from '../list/tenant-list.service';

@Injectable({
  providedIn: 'root',
})
export class TenantInvitationService {
  loading = false;
  warningMessage = null;

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private tenantListService: TenantListService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  invitationToken(tenant) {
    const currentUser = this.authService.currentUser;

    if (!currentUser || !currentUser.tenants) {
      return false;
    }

    const tenantUser = currentUser.tenants.find(
      (tenantUser) =>
        tenantUser.tenant.id === tenant.id &&
        tenantUser.status === 'invited',
    );

    if (!tenantUser) {
      return null;
    }

    return tenantUser.invitationToken;
  }

  async doAcceptFromAuth(
    token,
    forceAcceptOtherEmail = false,
  ) {
    try {
      if (this.loading) {
        return;
      }

      const isSignedIn = this.authService.isSignedIn;

      if (!isSignedIn) {
        AuthInvitationToken.set(token);
        this.router.navigate(['/auth/signup']);
        return;
      }

      this.warningMessage = null;
      this.loading = true;

      const tenant = await TenantApi.acceptInvitation(
        token,
        forceAcceptOtherEmail,
      );

      await this.authService.doSelectTenant(tenant);

      this.warningMessage = null;
      this.loading = false;
    } catch (error) {
      if (this.errorService.errorCode(error) === 404) {
        this.warningMessage = null;
        this.loading = false;
        this.router.navigate(['']);
        return;
      }

      if (this.errorService.errorCode(error) === 400) {
        this.warningMessage = this.errorService.selectMessage(
          error,
        );
        this.loading = false;
        return;
      }

      this.errorService.handle(error);
      this.warningMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    }
  }

  async doAccept(token) {
    try {
      this.loading = true;

      const tenant = await TenantApi.acceptInvitation(
        token,
      );
      await this.authService.doSelectTenant(tenant);

      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDecline(token) {
    try {
      this.loading = true;

      await TenantApi.declineInvitation(token);
      await this.tenantListService.doFetch(
        this.tenantListService.filter,
      );
      await this.authService.doRefreshCurrentUser();

      this.snackbar.success(
        i18n('tenant.invitation.declined'),
      );

      this.loading = false;
      this.router.navigate(['/tenant']);
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
