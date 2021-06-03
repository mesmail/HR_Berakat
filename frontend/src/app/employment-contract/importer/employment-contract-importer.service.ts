import { Injectable } from '@angular/core';
import { EmploymentContractApi } from 'src/app/employment-contract/employment-contract.api';
import employmentContractImporterFields from 'src/app/employment-contract/importer/employment-contract-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class EmploymentContractImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      EmploymentContractApi.import,
      employmentContractImporterFields,
      i18n('entities.employmentContract.importer.fileName'),
      i18n('entities.employmentContract.importer.hint'),
    );
  }
}
