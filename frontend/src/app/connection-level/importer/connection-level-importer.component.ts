import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-connection-level-importer',
  templateUrl: './connection-level-importer.component.html',
})
export class ConnectionLevelImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.connectionLevel.menu'), '/connection-level'],
    [i18n('entities.connectionLevel.importer.title')],
  ];
}
