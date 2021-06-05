import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { ManagementSkillsFormPageService } from 'src/app/management-skills/form/management-skills-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-management-skills-form-page',
  templateUrl: './management-skills-form-page.component.html',
})
export class ManagementSkillsFormPageComponent implements OnInit {
  constructor(
    private service: ManagementSkillsFormPageService,
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
    [i18n('entities.managementSkills.menu'), '/management-skills'],
    [
      this.isEditing
        ? i18n('entities.managementSkills.edit.title')
        : i18n('entities.managementSkills.new.title'),
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
    this.router.navigate(['/management-skills']);
  }
}
