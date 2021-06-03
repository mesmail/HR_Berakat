import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-advanced-payment-importer',
  templateUrl: './advanced-payment-importer.component.html',
})
export class AdvancedPaymentImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.advancedPayment.menu'), '/advanced-payment'],
    [i18n('entities.advancedPayment.importer.title')],
  ];
}
