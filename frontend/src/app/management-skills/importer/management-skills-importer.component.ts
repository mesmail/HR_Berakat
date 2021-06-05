import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-management-skills-importer',
  templateUrl: './management-skills-importer.component.html',
})
export class ManagementSkillsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.managementSkills.menu'), '/management-skills'],
    [i18n('entities.managementSkills.importer.title')],
  ];
}
