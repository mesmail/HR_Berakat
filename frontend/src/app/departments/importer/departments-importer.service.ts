import { Injectable } from '@angular/core';
import { DepartmentsApi } from 'src/app/departments/departments.api';
import departmentsImporterFields from 'src/app/departments/importer/departments-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      DepartmentsApi.import,
      departmentsImporterFields,
      i18n('entities.departments.importer.fileName'),
      i18n('entities.departments.importer.hint'),
    );
  }
}
