import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClaimViewService } from 'src/app/claim/view/claim-view.service';
import { ClaimService } from 'src/app/claim/claim.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ClaimDestroyService } from 'src/app/claim/destroy/claim-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-claim-view-toolbar',
  templateUrl: './claim-view-toolbar.component.html',
})
export class ClaimViewToolbarComponent {
  constructor(
    public service: ClaimViewService,
    private claimService: ClaimService,
    private destroyService: ClaimDestroyService,
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
    return this.claimService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.claimService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.claimService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
