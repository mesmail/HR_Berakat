import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-card-information-importer',
  templateUrl: './card-information-importer.component.html',
})
export class CardInformationImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.cardInformation.menu'), '/card-information'],
    [i18n('entities.cardInformation.importer.title')],
  ];
}
