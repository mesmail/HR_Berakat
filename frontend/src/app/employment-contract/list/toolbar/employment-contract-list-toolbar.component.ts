import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { EmploymentContractListService } from 'src/app/employment-contract/list/employment-contract-list.service';
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { EmploymentContractDestroyService } from 'src/app/employment-contract/destroy/employment-contract-destroy.service';

@Component({
  selector: 'app-employment-contract-list-toolbar',
  templateUrl: './employment-contract-list-toolbar.component.html',
})
export class EmploymentContractListToolbarComponent {
  constructor(
    public service: EmploymentContractListService,
    private employmentContractService: EmploymentContractService,
    private destroyService: EmploymentContractDestroyService,
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
    return this.employmentContractService.hasPermissionToCreate;
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
