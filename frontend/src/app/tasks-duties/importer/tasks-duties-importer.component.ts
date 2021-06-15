import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tasks-duties-importer',
  templateUrl: './tasks-duties-importer.component.html',
})
export class TasksDutiesImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.tasksDuties.menu'), '/tasks-duties'],
    [i18n('entities.tasksDuties.importer.title')],
  ];
}
