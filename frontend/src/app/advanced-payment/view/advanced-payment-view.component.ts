import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvancedPaymentModel } from 'src/app/advanced-payment/advanced-payment-model';
import { AdvancedPaymentViewService } from 'src/app/advanced-payment/view/advanced-payment-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-advanced-payment-view',
  templateUrl: './advanced-payment-view.component.html',
})
export class AdvancedPaymentViewComponent implements OnInit {
  constructor(
    private service: AdvancedPaymentViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return AdvancedPaymentModel.presenter(row, fieldName);
  }

  get fields() {
    return AdvancedPaymentModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.advancedPayment.menu'), '/advanced-payment'],
    [i18n('entities.advancedPayment.view.title')],
  ];
}
