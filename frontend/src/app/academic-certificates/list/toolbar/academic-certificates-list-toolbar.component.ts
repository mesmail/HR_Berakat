import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AcademicCertificatesListService } from 'src/app/academic-certificates/list/academic-certificates-list.service';
import { AcademicCertificatesService } from 'src/app/academic-certificates/academic-certificates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AcademicCertificatesDestroyService } from 'src/app/academic-certificates/destroy/academic-certificates-destroy.service';

@Component({
  selector: 'app-academic-certificates-list-toolbar',
  templateUrl: './academic-certificates-list-toolbar.component.html',
})
export class AcademicCertificatesListToolbarComponent {
  constructor(
    public service: AcademicCertificatesListService,
    private academicCertificatesService: AcademicCertificatesService,
    private destroyService: AcademicCertificatesDestroyService,
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
    return this.academicCertificatesService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.academicCertificatesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.academicCertificatesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.academicCertificatesService.hasPermissionToImport;
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
