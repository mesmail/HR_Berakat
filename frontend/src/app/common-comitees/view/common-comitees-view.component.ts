import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonComiteesModel } from 'src/app/common-comitees/common-comitees-model';
import { CommonComiteesViewService } from 'src/app/common-comitees/view/common-comitees-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-common-comitees-view',
  templateUrl: './common-comitees-view.component.html',
})
export class CommonComiteesViewComponent implements OnInit {
  constructor(
    private service: CommonComiteesViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CommonComiteesModel.presenter(row, fieldName);
  }

  get fields() {
    return CommonComiteesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.commonComitees.menu'), '/common-comitees'],
    [i18n('entities.commonComitees.view.title')],
  ];
}
