import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobFrameworksApi } from 'src/app/job-frameworks/job-frameworks.api';
import { JobFrameworksListService } from 'src/app/job-frameworks/list/job-frameworks-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobFrameworksDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private jobFrameworksListService: JobFrameworksListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await JobFrameworksApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.jobFrameworks.destroy.success'),
      );

      this.router.navigate(['/job-frameworks']);

      await this.jobFrameworksListService.doFetch(
        this.jobFrameworksListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await JobFrameworksApi.destroyAll(ids);
      this.loading = false;

      this.jobFrameworksListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.jobFrameworks.destroyAll.success'),
      );

      this.router.navigate(['/job-frameworks']);

      return this.jobFrameworksListService.doFetch(
        this.jobFrameworksListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
