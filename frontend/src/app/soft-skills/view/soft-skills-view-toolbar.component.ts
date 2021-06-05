import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { SoftSkillsViewService } from 'src/app/soft-skills/view/soft-skills-view.service';
import { SoftSkillsService } from 'src/app/soft-skills/soft-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SoftSkillsDestroyService } from 'src/app/soft-skills/destroy/soft-skills-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-soft-skills-view-toolbar',
  templateUrl: './soft-skills-view-toolbar.component.html',
})
export class SoftSkillsViewToolbarComponent {
  constructor(
    public service: SoftSkillsViewService,
    private softSkillsService: SoftSkillsService,
    private destroyService: SoftSkillsDestroyService,
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
    return this.softSkillsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.softSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.softSkillsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
