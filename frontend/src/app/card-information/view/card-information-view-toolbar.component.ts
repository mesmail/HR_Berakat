import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CardInformationViewService } from 'src/app/card-information/view/card-information-view.service';
import { CardInformationService } from 'src/app/card-information/card-information.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CardInformationDestroyService } from 'src/app/card-information/destroy/card-information-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-card-information-view-toolbar',
  templateUrl: './card-information-view-toolbar.component.html',
})
export class CardInformationViewToolbarComponent {
  constructor(
    public service: CardInformationViewService,
    private cardInformationService: CardInformationService,
    private destroyService: CardInformationDestroyService,
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
    return this.cardInformationService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.cardInformationService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.cardInformationService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
