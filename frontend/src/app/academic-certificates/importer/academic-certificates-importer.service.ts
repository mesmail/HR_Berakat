import { Injectable } from '@angular/core';
import { AcademicCertificatesApi } from 'src/app/academic-certificates/academic-certificates.api';
import academicCertificatesImporterFields from 'src/app/academic-certificates/importer/academic-certificates-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class AcademicCertificatesImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      AcademicCertificatesApi.import,
      academicCertificatesImporterFields,
      i18n('entities.academicCertificates.importer.fileName'),
      i18n('entities.academicCertificates.importer.hint'),
    );
  }
}
