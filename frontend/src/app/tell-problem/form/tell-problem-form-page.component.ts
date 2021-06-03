import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { TellProblemFormPageService } from 'src/app/tell-problem/form/tell-problem-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tell-problem-form-page',
  templateUrl: './tell-problem-form-page.component.html',
})
export class TellProblemFormPageComponent implements OnInit {
  constructor(
    private service: TellProblemFormPageService,
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
    [i18n('entities.tellProblem.menu'), '/tell-problem'],
    [
      this.isEditing
        ? i18n('entities.tellProblem.edit.title')
        : i18n('entities.tellProblem.new.title'),
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
    this.router.navigate(['/tell-problem']);
  }
}
