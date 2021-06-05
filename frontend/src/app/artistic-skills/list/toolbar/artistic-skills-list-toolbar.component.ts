import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ArtisticSkillsListService } from 'src/app/artistic-skills/list/artistic-skills-list.service';
import { ArtisticSkillsService } from 'src/app/artistic-skills/artistic-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ArtisticSkillsDestroyService } from 'src/app/artistic-skills/destroy/artistic-skills-destroy.service';

@Component({
  selector: 'app-artistic-skills-list-toolbar',
  templateUrl: './artistic-skills-list-toolbar.component.html',
})
export class ArtisticSkillsListToolbarComponent {
  constructor(
    public service: ArtisticSkillsListService,
    private artisticSkillsService: ArtisticSkillsService,
    private destroyService: ArtisticSkillsDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.artisticSkillsService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
