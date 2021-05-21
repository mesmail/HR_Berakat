import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TrainingCertificatesListService } from 'src/app/training-certificates/list/training-certificates-list.service';
import { TrainingCertificatesService } from 'src/app/training-certificates/training-certificates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TrainingCertificatesDestroyService } from 'src/app/training-certificates/destroy/training-certificates-destroy.service';

@Component({
  selector: 'app-training-certificates-list-toolbar',
  templateUrl: './training-certificates-list-toolbar.component.html',
})
export class TrainingCertificatesListToolbarComponent {
  constructor(
    public service: TrainingCertificatesListService,
    private trainingCertificatesService: TrainingCertificatesService,
    private destroyService: TrainingCertificatesDestroyService,
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
    return this.trainingCertificatesService.hasPermissionToCreate;
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
