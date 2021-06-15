import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ConnectionLevelApi } from 'src/app/connection-level/connection-level.api';
import { ConnectionLevelListService } from 'src/app/connection-level/list/connection-level-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ConnectionLevelDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private connectionLevelListService: ConnectionLevelListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ConnectionLevelApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.connectionLevel.destroy.success'),
      );

      this.router.navigate(['/connection-level']);

      await this.connectionLevelListService.doFetch(
        this.connectionLevelListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ConnectionLevelApi.destroyAll(ids);
      this.loading = false;

      this.connectionLevelListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.connectionLevel.destroyAll.success'),
      );

      this.router.navigate(['/connection-level']);

      return this.connectionLevelListService.doFetch(
        this.connectionLevelListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
