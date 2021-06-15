import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-administrative-financial-powers-list',
  templateUrl: './administrative-financial-powers-list.component.html',
})
export class AdministrativeFinancialPowersListComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.administrativeFinancialPowers.menu')],
  ];
}
