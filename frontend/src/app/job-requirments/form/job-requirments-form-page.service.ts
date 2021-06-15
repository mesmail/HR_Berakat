import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JobRequirmentsApi } from 'src/app/job-requirments/job-requirments.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobRequirmentsFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await JobRequirmentsApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/job-requirments']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await JobRequirmentsApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobRequirments.create.success'),
      );

      this.router.navigate(['/job-requirments']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await JobRequirmentsApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobRequirments.update.success'),
      );

      this.router.navigate(['/job-requirments']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
