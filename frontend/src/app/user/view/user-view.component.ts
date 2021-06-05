import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/user/user-model';
import { UserViewService } from 'src/app/user/view/user-view.service';
import { i18n } from 'src/i18n';
import { Roles } from 'src/security/roles';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
})
export class UserViewComponent implements OnInit {
  constructor(
    private service: UserViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return UserModel.presenter(row, fieldName);
  }

  get fields() {
    return UserModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.user;
  }

  roleDescriptionOf(roleId) {
    return Roles.descriptionOf(roleId);
  }

  roleLabelOf(roleId) {
    return Roles.labelOf(roleId);
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('user.menu'), '/user'],
    [i18n('user.view.title')],
  ];
}
