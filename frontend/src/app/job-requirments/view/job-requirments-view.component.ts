import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobRequirmentsModel } from 'src/app/job-requirments/job-requirments-model';
import { JobRequirmentsViewService } from 'src/app/job-requirments/view/job-requirments-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-job-requirments-view',
  templateUrl: './job-requirments-view.component.html',
})
export class JobRequirmentsViewComponent implements OnInit {
  constructor(
    private service: JobRequirmentsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return JobRequirmentsModel.presenter(row, fieldName);
  }

  get fields() {
    return JobRequirmentsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobRequirments.menu'), '/job-requirments'],
    [i18n('entities.jobRequirments.view.title')],
  ];
}
