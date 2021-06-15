import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CommonComiteesViewService } from 'src/app/common-comitees/view/common-comitees-view.service';
import { CommonComiteesService } from 'src/app/common-comitees/common-comitees.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CommonComiteesDestroyService } from 'src/app/common-comitees/destroy/common-comitees-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-common-comitees-view-toolbar',
  templateUrl: './common-comitees-view-toolbar.component.html',
})
export class CommonComiteesViewToolbarComponent {
  constructor(
    public service: CommonComiteesViewService,
    private commonComiteesService: CommonComiteesService,
    private destroyService: CommonComiteesDestroyService,
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
    return this.commonComiteesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.commonComiteesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.commonComiteesService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
