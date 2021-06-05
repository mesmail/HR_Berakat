import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { DepartmentsApi } from 'src/app/departments/departments.api';
import { DepartmentsListService } from 'src/app/departments/list/departments-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private departmentsListService: DepartmentsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await DepartmentsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.departments.destroy.success'),
      );

      this.router.navigate(['/departments']);

      await this.departmentsListService.doFetch(
        this.departmentsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await DepartmentsApi.destroyAll(ids);
      this.loading = false;

      this.departmentsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.departments.destroyAll.success'),
      );

      this.router.navigate(['/departments']);

      return this.departmentsListService.doFetch(
        this.departmentsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
