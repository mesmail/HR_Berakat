import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingCertificatesApi } from 'src/app/training-certificates/training-certificates.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TrainingCertificatesFormPageService {
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
        this.record = await TrainingCertificatesApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/training-certificates']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await TrainingCertificatesApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.trainingCertificates.create.success'),
      );

      this.router.navigate(['/training-certificates']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await TrainingCertificatesApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.trainingCertificates.update.success'),
      );

      this.router.navigate(['/training-certificates']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
