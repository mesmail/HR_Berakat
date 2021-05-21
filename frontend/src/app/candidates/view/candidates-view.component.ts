import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesModel } from 'src/app/candidates/candidates-model';
import { CandidatesViewService } from 'src/app/candidates/view/candidates-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-candidates-view',
  templateUrl: './candidates-view.component.html',
})
export class CandidatesViewComponent implements OnInit {
  constructor(
    private service: CandidatesViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CandidatesModel.presenter(row, fieldName);
  }

  get fields() {
    return CandidatesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.candidates.menu'), '/candidates'],
    [i18n('entities.candidates.view.title')],
  ];
}
