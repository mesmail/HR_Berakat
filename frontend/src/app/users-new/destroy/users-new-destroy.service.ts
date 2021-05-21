import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { UsersNewApi } from 'src/app/users-new/users-new.api';
import { UsersNewListService } from 'src/app/users-new/list/users-new-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class UsersNewDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private usersNewListService: UsersNewListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await UsersNewApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.usersNew.destroy.success'),
      );

      this.router.navigate(['/users-new']);

      await this.usersNewListService.doFetch(
        this.usersNewListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await UsersNewApi.destroyAll(ids);
      this.loading = false;

      this.usersNewListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.usersNew.destroyAll.success'),
      );

      this.router.navigate(['/users-new']);

      return this.usersNewListService.doFetch(
        this.usersNewListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
