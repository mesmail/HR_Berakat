import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { TenantFormPageService } from 'src/app/tenant/form/tenant-form-page.service';

@Component({
  selector: 'app-tenant-form-page',
  templateUrl: './tenant-form-page.component.html',
})
export class TenantFormPageComponent implements OnInit {
  constructor(
    private service: TenantFormPageService,
    private route: ActivatedRoute,
    private router: Router,
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
    [i18n('tenant.menu'), '/tenant'],
    [
      this.isEditing
        ? i18n('tenant.edit.title')
        : i18n('tenant.new.title'),
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
    this.router.navigate(['/tenant']);
  }
}
