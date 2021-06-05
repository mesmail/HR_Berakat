import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CandidatesViewService } from 'src/app/candidates/view/candidates-view.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CandidatesDestroyService } from 'src/app/candidates/destroy/candidates-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-candidates-view-toolbar',
  templateUrl: './candidates-view-toolbar.component.html',
})
export class CandidatesViewToolbarComponent {
  constructor(
    public service: CandidatesViewService,
    private candidatesService: CandidatesService,
    private destroyService: CandidatesDestroyService,
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
    return this.candidatesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.candidatesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.candidatesService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
