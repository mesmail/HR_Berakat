import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-employment-contract-importer',
  templateUrl: './employment-contract-importer.component.html',
})
export class EmploymentContractImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.employmentContract.menu'), '/employment-contract'],
    [i18n('entities.employmentContract.importer.title')],
  ];
}
