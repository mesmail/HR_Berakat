import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';
import { EmploymentContractViewService } from 'src/app/employment-contract/view/employment-contract-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-employment-contract-view',
  templateUrl: './employment-contract-view.component.html',
})
export class EmploymentContractViewComponent implements OnInit {
  constructor(
    private service: EmploymentContractViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return EmploymentContractModel.presenter(row, fieldName);
  }

  get fields() {
    return EmploymentContractModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.employmentContract.menu'), '/employment-contract'],
    [i18n('entities.employmentContract.view.title')],
  ];
}
