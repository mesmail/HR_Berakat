import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-common-comitees-importer',
  templateUrl: './common-comitees-importer.component.html',
})
export class CommonComiteesImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.commonComitees.menu'), '/common-comitees'],
    [i18n('entities.commonComitees.importer.title')],
  ];
}
