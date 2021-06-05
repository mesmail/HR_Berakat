import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsModel } from 'src/app/departments/departments-model';
import { DepartmentsViewService } from 'src/app/departments/view/departments-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-departments-view',
  templateUrl: './departments-view.component.html',
})
export class DepartmentsViewComponent implements OnInit {
  constructor(
    private service: DepartmentsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return DepartmentsModel.presenter(row, fieldName);
  }

  get fields() {
    return DepartmentsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.departments.menu'), '/departments'],
    [i18n('entities.departments.view.title')],
  ];
}
