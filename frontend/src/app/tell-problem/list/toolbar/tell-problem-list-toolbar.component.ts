import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TellProblemListService } from 'src/app/tell-problem/list/tell-problem-list.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TellProblemDestroyService } from 'src/app/tell-problem/destroy/tell-problem-destroy.service';

@Component({
  selector: 'app-tell-problem-list-toolbar',
  templateUrl: './tell-problem-list-toolbar.component.html',
})
export class TellProblemListToolbarComponent {
  constructor(
    public service: TellProblemListService,
    private tellProblemService: TellProblemService,
    private destroyService: TellProblemDestroyService,
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
    return this.tellProblemService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.tellProblemService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tellProblemService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tellProblemService.hasPermissionToImport;
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
