import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-academic-certificates-importer',
  templateUrl: './academic-certificates-importer.component.html',
})
export class AcademicCertificatesImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.academicCertificates.menu'), '/academic-certificates'],
    [i18n('entities.academicCertificates.importer.title')],
  ];
}
