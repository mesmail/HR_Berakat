import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { CommonComiteesFormPageService } from 'src/app/common-comitees/form/common-comitees-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-common-comitees-form-page',
  templateUrl: './common-comitees-form-page.component.html',
})
export class CommonComiteesFormPageComponent implements OnInit {
  constructor(
    private service: CommonComiteesFormPageService,
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
    [i18n('entities.commonComitees.menu'), '/common-comitees'],
    [
      this.isEditing
        ? i18n('entities.commonComitees.edit.title')
        : i18n('entities.commonComitees.new.title'),
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
    this.router.navigate(['/common-comitees']);
  }
}
