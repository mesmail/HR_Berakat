import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TenantApi } from 'src/app/tenant/tenant.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TenantFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private authService: AuthService,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await TenantApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/tenant']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      const tenant = await TenantApi.create(values);
      await this.authService.doRefreshCurrentUser();
      this.saveLoading = false;

      await this.authService.doSelectTenant(tenant);
      this.snackbar.success(i18n('tenant.create.success'));
      this.router.navigate(['']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      const tenant = await TenantApi.update(id, values);
      this.saveLoading = false;
      await this.authService.doSelectTenant(tenant);
      this.snackbar.success(i18n('tenant.update.success'));
      this.router.navigate(['']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
