import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AcademicCertificatesViewService } from 'src/app/academic-certificates/view/academic-certificates-view.service';
import { AcademicCertificatesService } from 'src/app/academic-certificates/academic-certificates.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AcademicCertificatesDestroyService } from 'src/app/academic-certificates/destroy/academic-certificates-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-academic-certificates-view-toolbar',
  templateUrl: './academic-certificates-view-toolbar.component.html',
})
export class AcademicCertificatesViewToolbarComponent {
  constructor(
    public service: AcademicCertificatesViewService,
    private academicCertificatesService: AcademicCertificatesService,
    private destroyService: AcademicCertificatesDestroyService,
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
    return this.academicCertificatesService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.academicCertificatesService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.academicCertificatesService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
