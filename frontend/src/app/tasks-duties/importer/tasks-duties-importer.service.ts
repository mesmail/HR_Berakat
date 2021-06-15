import { Injectable } from '@angular/core';
import { TasksDutiesApi } from 'src/app/tasks-duties/tasks-duties.api';
import tasksDutiesImporterFields from 'src/app/tasks-duties/importer/tasks-duties-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TasksDutiesImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TasksDutiesApi.import,
      tasksDutiesImporterFields,
      i18n('entities.tasksDuties.importer.fileName'),
      i18n('entities.tasksDuties.importer.hint'),
    );
  }
}
