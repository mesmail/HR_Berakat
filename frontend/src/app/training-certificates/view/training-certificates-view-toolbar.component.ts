import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TrainingCertificatesViewService } from 'src/app/training-certificates/view/training-certificates-view.service';
import { TrainingCertificatesService } from 'src/app/training-certificates/training-certificates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TrainingCertificatesDestroyService } from 'src/app/training-certificates/destroy/training-certificates-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-training-certificates-view-toolbar',
  templateUrl: './training-certificates-view-toolbar.component.html',
})
export class TrainingCertificatesViewToolbarComponent {
  constructor(
    public service: TrainingCertificatesViewService,
    private trainingCertificatesService: TrainingCertificatesService,
    private destroyService: TrainingCertificatesDestroyService,
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
    return this.trainingCertificatesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.trainingCertificatesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.trainingCertificatesService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
