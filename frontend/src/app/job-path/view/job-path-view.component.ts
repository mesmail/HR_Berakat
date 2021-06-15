import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPathModel } from 'src/app/job-path/job-path-model';
import { JobPathViewService } from 'src/app/job-path/view/job-path-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-job-path-view',
  templateUrl: './job-path-view.component.html',
})
export class JobPathViewComponent implements OnInit {
  constructor(
    private service: JobPathViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return JobPathModel.presenter(row, fieldName);
  }

  get fields() {
    return JobPathModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobPath.menu'), '/job-path'],
    [i18n('entities.jobPath.view.title')],
  ];
}
