import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveApplicationFormApi } from 'src/app/leave-application-form/leave-application-form.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplicationFormFormPageService {
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
        this.record = await LeaveApplicationFormApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/leave-application-form']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await LeaveApplicationFormApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.leaveApplicationForm.create.success'),
      );

      this.router.navigate(['/leave-application-form']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await LeaveApplicationFormApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.leaveApplicationForm.update.success'),
      );

      this.router.navigate(['/leave-application-form']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
