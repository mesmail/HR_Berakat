import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionalCertificationsApi } from 'src/app/professional-certifications/professional-certifications.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalCertificationsFormPageService {
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
        this.record = await ProfessionalCertificationsApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/professional-certifications']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ProfessionalCertificationsApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.professionalCertifications.create.success'),
      );

      this.router.navigate(['/professional-certifications']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await ProfessionalCertificationsApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.professionalCertifications.update.success'),
      );

      this.router.navigate(['/professional-certifications']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
