import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoftSkillsModel } from 'src/app/soft-skills/soft-skills-model';
import { SoftSkillsViewService } from 'src/app/soft-skills/view/soft-skills-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-soft-skills-view',
  templateUrl: './soft-skills-view.component.html',
})
export class SoftSkillsViewComponent implements OnInit {
  constructor(
    private service: SoftSkillsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return SoftSkillsModel.presenter(row, fieldName);
  }

  get fields() {
    return SoftSkillsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.softSkills.menu'), '/soft-skills'],
    [i18n('entities.softSkills.view.title')],
  ];
}
