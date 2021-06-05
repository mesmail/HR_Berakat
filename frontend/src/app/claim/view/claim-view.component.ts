import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimModel } from 'src/app/claim/claim-model';
import { ClaimViewService } from 'src/app/claim/view/claim-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-claim-view',
  templateUrl: './claim-view.component.html',
})
export class ClaimViewComponent implements OnInit {
  constructor(
    private service: ClaimViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ClaimModel.presenter(row, fieldName);
  }

  get fields() {
    return ClaimModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.claim.menu'), '/claim'],
    [i18n('entities.claim.view.title')],
  ];
}
