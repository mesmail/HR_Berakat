import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { UsersNewFormPageService } from 'src/app/users-new/form/users-new-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-users-new-form-page',
  templateUrl: './users-new-form-page.component.html',
})
export class UsersNewFormPageComponent implements OnInit {
  constructor(
    private service: UsersNewFormPageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doInit(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get initLoading() {
    return this.service.initLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.usersNew.menu'), '/users-new'],
    [
      this.isEditing
        ? i18n('entities.usersNew.edit.title')
        : i18n('entities.usersNew.new.title'),
    ],
  ];

  doSave(payload) {
    if (this.isEditing) {
      return this.service.doUpdate(
        payload.id,
        payload.values,
      );
    } else {
      return this.service.doCreate(payload.values);
    }
  }

  doCancel() {
    this.router.navigate(['/users-new']);
  }
}
