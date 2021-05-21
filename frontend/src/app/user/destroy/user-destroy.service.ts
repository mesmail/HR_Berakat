import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { UserApi } from 'src/app/user/user.api';
import { UserListService } from 'src/app/user/list/user-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class UserDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private userListService: UserListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await UserApi.destroy([id]);
      this.loading = false;
      this.snackbar.success(i18n('user.doDestroySuccess'));

      this.router.navigate(['/user']);

      await this.userListService.doFetch(
        this.userListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await UserApi.destroy(ids);
      this.loading = false;

      this.userListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('user.doDestroyAllSuccess'),
      );

      this.router.navigate(['/user']);

      return this.userListService.doFetch(
        this.userListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
