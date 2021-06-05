import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ArtisticSkillsViewService } from 'src/app/artistic-skills/view/artistic-skills-view.service';
import { ArtisticSkillsService } from 'src/app/artistic-skills/artistic-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ArtisticSkillsDestroyService } from 'src/app/artistic-skills/destroy/artistic-skills-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-artistic-skills-view-toolbar',
  templateUrl: './artistic-skills-view-toolbar.component.html',
})
export class ArtisticSkillsViewToolbarComponent {
  constructor(
    public service: ArtisticSkillsViewService,
    private artisticSkillsService: ArtisticSkillsService,
    private destroyService: ArtisticSkillsDestroyService,
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
    return this.artisticSkillsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.artisticSkillsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.artisticSkillsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
