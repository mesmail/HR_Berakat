import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministrativeFinancialPowersModel } from 'src/app/administrative-financial-powers/administrative-financial-powers-model';
import { AdministrativeFinancialPowersViewService } from 'src/app/administrative-financial-powers/view/administrative-financial-powers-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-administrative-financial-powers-view',
  templateUrl: './administrative-financial-powers-view.component.html',
})
export class AdministrativeFinancialPowersViewComponent implements OnInit {
  constructor(
    private service: AdministrativeFinancialPowersViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return AdministrativeFinancialPowersModel.presenter(row, fieldName);
  }

  get fields() {
    return AdministrativeFinancialPowersModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.administrativeFinancialPowers.menu'), '/administrative-financial-powers'],
    [i18n('entities.administrativeFinancialPowers.view.title')],
  ];
}
