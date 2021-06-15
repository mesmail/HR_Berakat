import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-path-importer',
  templateUrl: './job-path-importer.component.html',
})
export class JobPathImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobPath.menu'), '/job-path'],
    [i18n('entities.jobPath.importer.title')],
  ];
}
