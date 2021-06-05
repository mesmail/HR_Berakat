import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { EmploymentContractViewService } from 'src/app/employment-contract/view/employment-contract-view.service';
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { EmploymentContractDestroyService } from 'src/app/employment-contract/destroy/employment-contract-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-employment-contract-view-toolbar',
  templateUrl: './employment-contract-view-toolbar.component.html',
})
export class EmploymentContractViewToolbarComponent {
  constructor(
    public service: EmploymentContractViewService,
    private employmentContractService: EmploymentContractService,
    private destroyService: EmploymentContractDestroyService,
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
    return this.employmentContractService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.employmentContractService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.employmentContractService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
