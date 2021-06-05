import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TellProblemViewService } from 'src/app/tell-problem/view/tell-problem-view.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TellProblemDestroyService } from 'src/app/tell-problem/destroy/tell-problem-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-tell-problem-view-toolbar',
  templateUrl: './tell-problem-view-toolbar.component.html',
})
export class TellProblemViewToolbarComponent {
  constructor(
    public service: TellProblemViewService,
    private tellProblemService: TellProblemService,
    private destroyService: TellProblemDestroyService,
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
    return this.tellProblemService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.tellProblemService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.tellProblemService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
