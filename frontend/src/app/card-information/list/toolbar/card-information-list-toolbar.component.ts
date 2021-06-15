import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CardInformationListService } from 'src/app/card-information/list/card-information-list.service';
import { CardInformationService } from 'src/app/card-information/card-information.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CardInformationDestroyService } from 'src/app/card-information/destroy/card-information-destroy.service';

@Component({
  selector: 'app-card-information-list-toolbar',
  templateUrl: './card-information-list-toolbar.component.html',
})
export class CardInformationListToolbarComponent {
  constructor(
    public service: CardInformationListService,
    private cardInformationService: CardInformationService,
    private destroyService: CardInformationDestroyService,
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
    return this.cardInformationService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.cardInformationService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.cardInformationService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.cardInformationService.hasPermissionToImport;
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
