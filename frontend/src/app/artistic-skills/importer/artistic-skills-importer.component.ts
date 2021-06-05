import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-artistic-skills-importer',
  templateUrl: './artistic-skills-importer.component.html',
})
export class ArtisticSkillsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.artisticSkills.menu'), '/artistic-skills'],
    [i18n('entities.artisticSkills.importer.title')],
  ];
}
