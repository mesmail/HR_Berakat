import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ManagementSkillsViewService } from 'src/app/management-skills/view/management-skills-view.service';
import { ManagementSkillsService } from 'src/app/management-skills/management-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ManagementSkillsDestroyService } from 'src/app/management-skills/destroy/management-skills-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-management-skills-view-toolbar',
  templateUrl: './management-skills-view-toolbar.component.html',
})
export class ManagementSkillsViewToolbarComponent {
  constructor(
    public service: ManagementSkillsViewService,
    private managementSkillsService: ManagementSkillsService,
    private destroyService: ManagementSkillsDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.managementSkillsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.managementSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.managementSkillsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
