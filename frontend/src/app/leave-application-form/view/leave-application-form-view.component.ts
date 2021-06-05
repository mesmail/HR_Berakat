import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveApplicationFormModel } from 'src/app/leave-application-form/leave-application-form-model';
import { LeaveApplicationFormViewService } from 'src/app/leave-application-form/view/leave-application-form-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-leave-application-form-view',
  templateUrl: './leave-application-form-view.component.html',
})
export class LeaveApplicationFormViewComponent implements OnInit {
  constructor(
    private service: LeaveApplicationFormViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return LeaveApplicationFormModel.presenter(row, fieldName);
  }

  get fields() {
    return LeaveApplicationFormModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.leaveApplicationForm.menu'), '/leave-application-form'],
    [i18n('entities.leaveApplicationForm.view.title')],
  ];
}
