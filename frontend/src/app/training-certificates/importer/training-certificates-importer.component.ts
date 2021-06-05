import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-training-certificates-importer',
  templateUrl: './training-certificates-importer.component.html',
})
export class TrainingCertificatesImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.trainingCertificates.menu'), '/training-certificates'],
    [i18n('entities.trainingCertificates.importer.title')],
  ];
}
