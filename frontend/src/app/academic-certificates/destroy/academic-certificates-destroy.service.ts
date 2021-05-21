import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AcademicCertificatesApi } from 'src/app/academic-certificates/academic-certificates.api';
import { AcademicCertificatesListService } from 'src/app/academic-certificates/list/academic-certificates-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AcademicCertificatesDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private academicCertificatesListService: AcademicCertificatesListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await AcademicCertificatesApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.academicCertificates.destroy.success'),
      );

      this.router.navigate(['/academic-certificates']);

      await this.academicCertificatesListService.doFetch(
        this.academicCertificatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await AcademicCertificatesApi.destroyAll(ids);
      this.loading = false;

      this.academicCertificatesListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.academicCertificates.destroyAll.success'),
      );

      this.router.navigate(['/academic-certificates']);

      return this.academicCertificatesListService.doFetch(
        this.academicCertificatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
