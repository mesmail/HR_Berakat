import { Injectable } from '@angular/core';
import { TrainingCertificatesApi } from 'src/app/training-certificates/training-certificates.api';
import trainingCertificatesImporterFields from 'src/app/training-certificates/importer/training-certificates-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingCertificatesImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TrainingCertificatesApi.import,
      trainingCertificatesImporterFields,
      i18n('entities.trainingCertificates.importer.fileName'),
      i18n('entities.trainingCertificates.importer.hint'),
    );
  }
}
