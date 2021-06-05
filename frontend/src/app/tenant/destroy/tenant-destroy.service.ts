import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TenantApi } from 'src/app/tenant/tenant.api';
import { TenantListService } from 'src/app/tenant/list/tenant-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { PermissionChecker } from 'src/app/auth/permission-checker';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TenantDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private tenantListService: TenantListService,
    private authService: AuthService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TenantApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(i18n('tenant.destroy.success'));


      await this.tenantListService.doFetch(
        this.tenantListService.filter,
      );

      await this.authService.doRefreshCurrentUser();

      const permissionChecker = new PermissionChecker(
        this.authService.currentTenant,
        this.authService.currentUser,
      );

      if (permissionChecker.isEmptyTenant) {
        this.router.navigate(['/auth/tenant']);
      } else {
        this.router.navigate(['/tenant']);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TenantApi.destroyAll(ids);
      this.loading = false;

      this.tenantListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('tenant.destroyAll.success'),
      );

      await this.tenantListService.doFetch(
        this.tenantListService.filter,
      );

      await this.authService.doRefreshCurrentUser();

      const permissionChecker = new PermissionChecker(
        this.authService.currentTenant,
        this.authService.currentUser,
      );

      if (permissionChecker.isEmptyTenant) {
        this.router.navigate(['/auth/tenant']);
      } else {
        this.router.navigate(['/tenant']);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
