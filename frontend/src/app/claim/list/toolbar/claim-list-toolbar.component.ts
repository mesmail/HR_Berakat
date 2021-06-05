import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClaimListService } from 'src/app/claim/list/claim-list.service';
import { ClaimService } from 'src/app/claim/claim.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClaimDestroyService } from 'src/app/claim/destroy/claim-destroy.service';

@Component({
  selector: 'app-claim-list-toolbar',
  templateUrl: './claim-list-toolbar.component.html',
})
export class ClaimListToolbarComponent {
  constructor(
    public service: ClaimListService,
    private claimService: ClaimService,
    private destroyService: ClaimDestroyService,
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
    return this.claimService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.claimService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.claimService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.claimService.hasPermissionToImport;
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
