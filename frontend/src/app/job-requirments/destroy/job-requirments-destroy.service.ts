import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobRequirmentsApi } from 'src/app/job-requirments/job-requirments.api';
import { JobRequirmentsListService } from 'src/app/job-requirments/list/job-requirments-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobRequirmentsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private jobRequirmentsListService: JobRequirmentsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await JobRequirmentsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.jobRequirments.destroy.success'),
      );

      this.router.navigate(['/job-requirments']);

      await this.jobRequirmentsListService.doFetch(
        this.jobRequirmentsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await JobRequirmentsApi.destroyAll(ids);
      this.loading = false;

      this.jobRequirmentsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.jobRequirments.destroyAll.success'),
      );

      this.router.navigate(['/job-requirments']);

      return this.jobRequirmentsListService.doFetch(
        this.jobRequirmentsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
