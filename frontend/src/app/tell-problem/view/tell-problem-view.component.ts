import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TellProblemModel } from 'src/app/tell-problem/tell-problem-model';
import { TellProblemViewService } from 'src/app/tell-problem/view/tell-problem-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tell-problem-view',
  templateUrl: './tell-problem-view.component.html',
})
export class TellProblemViewComponent implements OnInit {
  constructor(
    private service: TellProblemViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TellProblemModel.presenter(row, fieldName);
  }

  get fields() {
    return TellProblemModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.tellProblem.menu'), '/tell-problem'],
    [i18n('entities.tellProblem.view.title')],
  ];
}
