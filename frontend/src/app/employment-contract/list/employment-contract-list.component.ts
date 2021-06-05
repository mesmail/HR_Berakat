import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-employment-contract-list',
  templateUrl: './employment-contract-list.component.html',
})
export class EmploymentContractListComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.employmentContract.menu')],
  ];
}
