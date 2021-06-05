import { Component } from '@angular/core';
import { SoftSkillsListService } from 'src/app/soft-skills/list/soft-skills-list.service';
import { SoftSkillsService } from 'src/app/soft-skills/soft-skills.service';
import { SoftSkillsModel } from 'src/app/soft-skills/soft-skills-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { SoftSkillsDestroyService } from 'src/app/soft-skills/destroy/soft-skills-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-soft-skills-list-table',
  templateUrl: './soft-skills-list-table.component.html',
})
export class SoftSkillsListTableComponent {
  constructor(
    public service: SoftSkillsListService,
    public destroyService: SoftSkillsDestroyService,
    public softSkillsService: SoftSkillsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return SoftSkillsModel.presenter(row, fieldName);
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
    return this.softSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.softSkillsService.hasPermissionToDestroy;
  }

  get fields() {
    return SoftSkillsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.name.name,

      '_actions',
    ];
  }
}
