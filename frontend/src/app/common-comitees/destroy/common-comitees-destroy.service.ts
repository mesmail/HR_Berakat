import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CommonComiteesApi } from 'src/app/common-comitees/common-comitees.api';
import { CommonComiteesListService } from 'src/app/common-comitees/list/common-comitees-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CommonComiteesDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private commonComiteesListService: CommonComiteesListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CommonComiteesApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.commonComitees.destroy.success'),
      );

      this.router.navigate(['/common-comitees']);

      await this.commonComiteesListService.doFetch(
        this.commonComiteesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CommonComiteesApi.destroyAll(ids);
      this.loading = false;

      this.commonComiteesListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.commonComitees.destroyAll.success'),
      );

      this.router.navigate(['/common-comitees']);

      return this.commonComiteesListService.doFetch(
        this.commonComiteesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
