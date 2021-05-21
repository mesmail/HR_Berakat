import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ManagementSkillsListService } from 'src/app/management-skills/list/management-skills-list.service';
import { ManagementSkillsService } from 'src/app/management-skills/management-skills.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ManagementSkillsDestroyService } from 'src/app/management-skills/destroy/management-skills-destroy.service';

@Component({
  selector: 'app-management-skills-list-toolbar',
  templateUrl: './management-skills-list-toolbar.component.html',
})
export class ManagementSkillsListToolbarComponent {
  constructor(
    public service: ManagementSkillsListService,
    private managementSkillsService: ManagementSkillsService,
    private destroyService: ManagementSkillsDestroyService,
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
    return this.managementSkillsService.hasPermissionToCreate;
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
