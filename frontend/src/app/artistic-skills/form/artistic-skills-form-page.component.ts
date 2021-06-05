import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { ArtisticSkillsFormPageService } from 'src/app/artistic-skills/form/artistic-skills-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-artistic-skills-form-page',
  templateUrl: './artistic-skills-form-page.component.html',
})
export class ArtisticSkillsFormPageComponent implements OnInit {
  constructor(
    private service: ArtisticSkillsFormPageService,
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
    [i18n('entities.artisticSkills.menu'), '/artistic-skills'],
    [
      this.isEditing
        ? i18n('entities.artisticSkills.edit.title')
        : i18n('entities.artisticSkills.new.title'),
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
    this.router.navigate(['/artistic-skills']);
  }
}
