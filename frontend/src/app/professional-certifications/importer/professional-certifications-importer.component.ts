import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-professional-certifications-importer',
  templateUrl: './professional-certifications-importer.component.html',
})
export class ProfessionalCertificationsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.professionalCertifications.menu'), '/professional-certifications'],
    [i18n('entities.professionalCertifications.importer.title')],
  ];
}
