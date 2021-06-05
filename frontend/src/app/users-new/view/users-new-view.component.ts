import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersNewModel } from 'src/app/users-new/users-new-model';
import { UsersNewViewService } from 'src/app/users-new/view/users-new-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-users-new-view',
  templateUrl: './users-new-view.component.html',
})
export class UsersNewViewComponent implements OnInit {
  constructor(
    private service: UsersNewViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return UsersNewModel.presenter(row, fieldName);
  }

  get fields() {
    return UsersNewModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.usersNew.menu'), '/users-new'],
    [i18n('entities.usersNew.view.title')],
  ];
}
