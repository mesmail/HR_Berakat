import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsModel } from 'src/app/jobs/jobs-model';
import { JobsViewService } from 'src/app/jobs/view/jobs-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
})
export class JobsViewComponent implements OnInit {
  constructor(
    private service: JobsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return JobsModel.presenter(row, fieldName);
  }

  get fields() {
    return JobsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobs.menu'), '/jobs'],
    [i18n('entities.jobs.view.title')],
  ];
}
