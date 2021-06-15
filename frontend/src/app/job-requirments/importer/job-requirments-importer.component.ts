import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-requirments-importer',
  templateUrl: './job-requirments-importer.component.html',
})
export class JobRequirmentsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobRequirments.menu'), '/job-requirments'],
    [i18n('entities.jobRequirments.importer.title')],
  ];
}
