import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-frameworks-importer',
  templateUrl: './job-frameworks-importer.component.html',
})
export class JobFrameworksImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobFrameworks.menu'), '/job-frameworks'],
    [i18n('entities.jobFrameworks.importer.title')],
  ];
}
