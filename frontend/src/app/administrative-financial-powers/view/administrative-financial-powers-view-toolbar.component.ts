import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AdministrativeFinancialPowersViewService } from 'src/app/administrative-financial-powers/view/administrative-financial-powers-view.service';
import { AdministrativeFinancialPowersService } from 'src/app/administrative-financial-powers/administrative-financial-powers.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AdministrativeFinancialPowersDestroyService } from 'src/app/administrative-financial-powers/destroy/administrative-financial-powers-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-administrative-financial-powers-view-toolbar',
  templateUrl: './administrative-financial-powers-view-toolbar.component.html',
})
export class AdministrativeFinancialPowersViewToolbarComponent {
  constructor(
    public service: AdministrativeFinancialPowersViewService,
    private administrativeFinancialPowersService: AdministrativeFinancialPowersService,
    private destroyService: AdministrativeFinancialPowersDestroyService,
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
    return this.administrativeFinancialPowersService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.administrativeFinancialPowersService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.administrativeFinancialPowersService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
