import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementSkillsModel } from 'src/app/management-skills/management-skills-model';
import { ManagementSkillsViewService } from 'src/app/management-skills/view/management-skills-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-management-skills-view',
  templateUrl: './management-skills-view.component.html',
})
export class ManagementSkillsViewComponent implements OnInit {
  constructor(
    private service: ManagementSkillsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ManagementSkillsModel.presenter(row, fieldName);
  }

  get fields() {
    return ManagementSkillsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.managementSkills.menu'), '/management-skills'],
    [i18n('entities.managementSkills.view.title')],
  ];
}
