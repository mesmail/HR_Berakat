import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-jobs-importer',
  templateUrl: './jobs-importer.component.html',
})
export class JobsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobs.menu'), '/jobs'],
    [i18n('entities.jobs.importer.title')],
  ];
}
