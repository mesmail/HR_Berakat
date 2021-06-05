import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobsApi } from 'src/app/jobs/jobs.api';
import { JobsListService } from 'src/app/jobs/list/jobs-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private jobsListService: JobsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await JobsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.jobs.destroy.success'),
      );

      this.router.navigate(['/jobs']);

      await this.jobsListService.doFetch(
        this.jobsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await JobsApi.destroyAll(ids);
      this.loading = false;

      this.jobsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.jobs.destroyAll.success'),
      );

      this.router.navigate(['/jobs']);

      return this.jobsListService.doFetch(
        this.jobsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
