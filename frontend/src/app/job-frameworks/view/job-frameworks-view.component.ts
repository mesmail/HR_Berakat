import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobFrameworksModel } from 'src/app/job-frameworks/job-frameworks-model';
import { JobFrameworksViewService } from 'src/app/job-frameworks/view/job-frameworks-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-job-frameworks-view',
  templateUrl: './job-frameworks-view.component.html',
})
export class JobFrameworksViewComponent implements OnInit {
  constructor(
    private service: JobFrameworksViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return JobFrameworksModel.presenter(row, fieldName);
  }

  get fields() {
    return JobFrameworksModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobFrameworks.menu'), '/job-frameworks'],
    [i18n('entities.jobFrameworks.view.title')],
  ];
}
