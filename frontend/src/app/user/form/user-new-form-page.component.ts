import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { UserFormService } from './user-form.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-new-form-page',
  templateUrl: './user-new-form-page.component.html',
})
export class UserNewFormPageComponent implements OnInit {
  constructor(
    private service: UserFormService,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    return this.service.doInit();
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('user.title'), '/user'],
    [i18n('user.new.title')],
  ];

  doSave(payload) {
    return this.service.doAdd(payload.values);
  }

  doCancel() {
    this.router.navigate(['/user']);
  }
}
