import { Component } from '@angular/core';
import { ArtisticSkillsListService } from 'src/app/artistic-skills/list/artistic-skills-list.service';
import { ArtisticSkillsService } from 'src/app/artistic-skills/artistic-skills.service';
import { ArtisticSkillsModel } from 'src/app/artistic-skills/artistic-skills-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ArtisticSkillsDestroyService } from 'src/app/artistic-skills/destroy/artistic-skills-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-artistic-skills-list-table',
  templateUrl: './artistic-skills-list-table.component.html',
})
export class ArtisticSkillsListTableComponent {
  constructor(
    public service: ArtisticSkillsListService,
    public destroyService: ArtisticSkillsDestroyService,
    public artisticSkillsService: ArtisticSkillsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ArtisticSkillsModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.artisticSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.artisticSkillsService.hasPermissionToDestroy;
  }

  get fields() {
    return ArtisticSkillsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.artisticSkills.name,

      '_actions',
    ];
  }
}
