import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CommonComiteesListService } from 'src/app/common-comitees/list/common-comitees-list.service';
import { CommonComiteesService } from 'src/app/common-comitees/common-comitees.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CommonComiteesDestroyService } from 'src/app/common-comitees/destroy/common-comitees-destroy.service';

@Component({
  selector: 'app-common-comitees-list-toolbar',
  templateUrl: './common-comitees-list-toolbar.component.html',
})
export class CommonComiteesListToolbarComponent {
  constructor(
    public service: CommonComiteesListService,
    private commonComiteesService: CommonComiteesService,
    private destroyService: CommonComiteesDestroyService,
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
    return this.commonComiteesService.hasPermissionToCreate;
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
