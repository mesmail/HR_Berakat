import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicCertificatesApi } from 'src/app/academic-certificates/academic-certificates.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AcademicCertificatesFormPageService {
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
        this.record = await AcademicCertificatesApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/academic-certificates']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await AcademicCertificatesApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.academicCertificates.create.success'),
      );

      this.router.navigate(['/academic-certificates']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await AcademicCertificatesApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.academicCertificates.update.success'),
      );

      this.router.navigate(['/academic-certificates']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
