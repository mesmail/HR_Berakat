import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProfessionalCertificationsApi } from 'src/app/professional-certifications/professional-certifications.api';
import { ProfessionalCertificationsListService } from 'src/app/professional-certifications/list/professional-certifications-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalCertificationsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private professionalCertificationsListService: ProfessionalCertificationsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ProfessionalCertificationsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.professionalCertifications.destroy.success'),
      );

      this.router.navigate(['/professional-certifications']);

      await this.professionalCertificationsListService.doFetch(
        this.professionalCertificationsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ProfessionalCertificationsApi.destroyAll(ids);
      this.loading = false;

      this.professionalCertificationsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.professionalCertifications.destroyAll.success'),
      );

      this.router.navigate(['/professional-certifications']);

      return this.professionalCertificationsListService.doFetch(
        this.professionalCertificationsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
