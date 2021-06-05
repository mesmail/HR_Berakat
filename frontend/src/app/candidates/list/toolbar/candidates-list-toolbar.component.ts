import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CandidatesListService } from 'src/app/candidates/list/candidates-list.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CandidatesDestroyService } from 'src/app/candidates/destroy/candidates-destroy.service';

@Component({
  selector: 'app-candidates-list-toolbar',
  templateUrl: './candidates-list-toolbar.component.html',
})
export class CandidatesListToolbarComponent {
  constructor(
    public service: CandidatesListService,
    private candidatesService: CandidatesService,
    private destroyService: CandidatesDestroyService,
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
    return this.candidatesService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.candidatesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.candidatesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.candidatesService.hasPermissionToImport;
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
