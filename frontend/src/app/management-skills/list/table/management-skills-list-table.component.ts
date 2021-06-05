import { Component } from '@angular/core';
import { ManagementSkillsListService } from 'src/app/management-skills/list/management-skills-list.service';
import { ManagementSkillsService } from 'src/app/management-skills/management-skills.service';
import { ManagementSkillsModel } from 'src/app/management-skills/management-skills-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ManagementSkillsDestroyService } from 'src/app/management-skills/destroy/management-skills-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-management-skills-list-table',
  templateUrl: './management-skills-list-table.component.html',
})
export class ManagementSkillsListTableComponent {
  constructor(
    public service: ManagementSkillsListService,
    public destroyService: ManagementSkillsDestroyService,
    public managementSkillsService: ManagementSkillsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ManagementSkillsModel.presenter(row, fieldName);
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
    return this.managementSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.managementSkillsService.hasPermissionToDestroy;
  }

  get fields() {
    return ManagementSkillsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.managementSkills.name,

      '_actions',
    ];
  }
}
