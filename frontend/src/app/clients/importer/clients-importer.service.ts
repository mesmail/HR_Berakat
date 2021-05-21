import { Injectable } from '@angular/core';
import { ClientsApi } from 'src/app/clients/clients.api';
import clientsImporterFields from 'src/app/clients/importer/clients-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ClientsApi.import,
      clientsImporterFields,
      i18n('entities.clients.importer.fileName'),
      i18n('entities.clients.importer.hint'),
    );
  }
}
