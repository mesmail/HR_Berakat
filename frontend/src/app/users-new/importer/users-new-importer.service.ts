import { Injectable } from '@angular/core';
import { UsersNewApi } from 'src/app/users-new/users-new.api';
import usersNewImporterFields from 'src/app/users-new/importer/users-new-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class UsersNewImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      UsersNewApi.import,
      usersNewImporterFields,
      i18n('entities.usersNew.importer.fileName'),
      i18n('entities.usersNew.importer.hint'),
    );
  }
}
