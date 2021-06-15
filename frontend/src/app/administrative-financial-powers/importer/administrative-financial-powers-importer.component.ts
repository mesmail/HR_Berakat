import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-administrative-financial-powers-importer',
  templateUrl: './administrative-financial-powers-importer.component.html',
})
export class AdministrativeFinancialPowersImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.administrativeFinancialPowers.menu'), '/administrative-financial-powers'],
    [i18n('entities.administrativeFinancialPowers.importer.title')],
  ];
}
