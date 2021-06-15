import { Injectable } from '@angular/core';
import { ConnectionLevelApi } from 'src/app/connection-level/connection-level.api';
import connectionLevelImporterFields from 'src/app/connection-level/importer/connection-level-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionLevelImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ConnectionLevelApi.import,
      connectionLevelImporterFields,
      i18n('entities.connectionLevel.importer.fileName'),
      i18n('entities.connectionLevel.importer.hint'),
    );
  }
}
