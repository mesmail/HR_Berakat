import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TrainingCertificatesApi } from 'src/app/training-certificates/training-certificates.api';
import { TrainingCertificatesListService } from 'src/app/training-certificates/list/training-certificates-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TrainingCertificatesDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private trainingCertificatesListService: TrainingCertificatesListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TrainingCertificatesApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.trainingCertificates.destroy.success'),
      );

      this.router.navigate(['/training-certificates']);

      await this.trainingCertificatesListService.doFetch(
        this.trainingCertificatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TrainingCertificatesApi.destroyAll(ids);
      this.loading = false;

      this.trainingCertificatesListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.trainingCertificates.destroyAll.success'),
      );

      this.router.navigate(['/training-certificates']);

      return this.trainingCertificatesListService.doFetch(
        this.trainingCertificatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
