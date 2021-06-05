import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { SoftSkillsListService } from 'src/app/soft-skills/list/soft-skills-list.service';
import { SoftSkillsService } from 'src/app/soft-skills/soft-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { SoftSkillsDestroyService } from 'src/app/soft-skills/destroy/soft-skills-destroy.service';

@Component({
  selector: 'app-soft-skills-list-toolbar',
  templateUrl: './soft-skills-list-toolbar.component.html',
})
export class SoftSkillsListToolbarComponent {
  constructor(
    public service: SoftSkillsListService,
    private softSkillsService: SoftSkillsService,
    private destroyService: SoftSkillsDestroyService,
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
    return this.softSkillsService.hasPermissionToCreate;
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
