import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tell-problem-importer',
  templateUrl: './tell-problem-importer.component.html',
})
export class TellProblemImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.tellProblem.menu'), '/tell-problem'],
    [i18n('entities.tellProblem.importer.title')],
  ];
}
