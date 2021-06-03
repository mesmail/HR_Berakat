import { Injectable } from '@angular/core';
import { TellProblemApi } from 'src/app/tell-problem/tell-problem.api';
import tellProblemImporterFields from 'src/app/tell-problem/importer/tell-problem-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TellProblemImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TellProblemApi.import,
      tellProblemImporterFields,
      i18n('entities.tellProblem.importer.fileName'),
      i18n('entities.tellProblem.importer.hint'),
    );
  }
}
