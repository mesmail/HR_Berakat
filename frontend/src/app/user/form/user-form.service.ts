import { Injectable } from '@angular/core';
import { UserApi } from 'src/app/user/user.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  initLoading = false;
  saveLoading = false;
  user = null;

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router,
    private snackbar: Snackbar,
  ) {}

  async doInit(id?) {
    try {
      this.user = null;
      this.initLoading = true;

      if (id) {
        this.user = await UserApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.user = null;
      this.initLoading = false;

      this.router.navigate(['/user']);
    }
  }

  async doAdd(values) {
    try {
      this.saveLoading = true;
      await UserApi.create(values);
      this.saveLoading = false;
      this.snackbar.success(i18n('user.doAddSuccess'));
      this.router.navigate(['/user']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(values) {
    try {
      this.saveLoading = true;
      await UserApi.edit(values);
      this.saveLoading = false;
      const currentUser = this.authService.currentUser;

      if (currentUser.id === values.id) {
        await this.authService.doRefreshCurrentUser();
      }

      this.snackbar.success(i18n('user.doUpdateSuccess'));
      this.router.navigate(['/user']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
