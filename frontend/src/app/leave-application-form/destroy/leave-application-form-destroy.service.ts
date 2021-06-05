import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { LeaveApplicationFormApi } from 'src/app/leave-application-form/leave-application-form.api';
import { LeaveApplicationFormListService } from 'src/app/leave-application-form/list/leave-application-form-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplicationFormDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private leaveApplicationFormListService: LeaveApplicationFormListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await LeaveApplicationFormApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.leaveApplicationForm.destroy.success'),
      );

      this.router.navigate(['/leave-application-form']);

      await this.leaveApplicationFormListService.doFetch(
        this.leaveApplicationFormListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await LeaveApplicationFormApi.destroyAll(ids);
      this.loading = false;

      this.leaveApplicationFormListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.leaveApplicationForm.destroyAll.success'),
      );

      this.router.navigate(['/leave-application-form']);

      return this.leaveApplicationFormListService.doFetch(
        this.leaveApplicationFormListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
