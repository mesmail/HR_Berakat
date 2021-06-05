import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-claim-importer',
  templateUrl: './claim-importer.component.html',
})
export class ClaimImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.claim.menu'), '/claim'],
    [i18n('entities.claim.importer.title')],
  ];
}
