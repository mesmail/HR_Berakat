import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clients-importer',
  templateUrl: './clients-importer.component.html',
})
export class ClientsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.clients.menu'), '/clients'],
    [i18n('entities.clients.importer.title')],
  ];
}
