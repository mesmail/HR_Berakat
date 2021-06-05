import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-soft-skills-importer',
  templateUrl: './soft-skills-importer.component.html',
})
export class SoftSkillsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.softSkills.menu'), '/soft-skills'],
    [i18n('entities.softSkills.importer.title')],
  ];
}
