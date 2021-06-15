import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobPathApi } from 'src/app/job-path/job-path.api';
import { JobPathListService } from 'src/app/job-path/list/job-path-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobPathDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private jobPathListService: JobPathListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await JobPathApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.jobPath.destroy.success'),
      );

      this.router.navigate(['/job-path']);

      await this.jobPathListService.doFetch(
        this.jobPathListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await JobPathApi.destroyAll(ids);
      this.loading = false;

      this.jobPathListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.jobPath.destroyAll.success'),
      );

      this.router.navigate(['/job-path']);

      return this.jobPathListService.doFetch(
        this.jobPathListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
