import { Injectable } from '@angular/core';
import { ProfessionalCertificationsApi } from 'src/app/professional-certifications/professional-certifications.api';
import professionalCertificationsImporterFields from 'src/app/professional-certifications/importer/professional-certifications-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalCertificationsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ProfessionalCertificationsApi.import,
      professionalCertificationsImporterFields,
      i18n('entities.professionalCertifications.importer.fileName'),
      i18n('entities.professionalCertifications.importer.hint'),
    );
  }
}
