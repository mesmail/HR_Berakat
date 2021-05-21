import { Injectable } from '@angular/core';
import { UserApi } from 'src/app/user/user.api';
import userImporterFields from 'src/app/user/importer/user-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class UserImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      UserApi.import,
      userImporterFields,
      i18n('user.importer.fileName'),
      i18n('user.importer.hint'),
    );
  }
}
