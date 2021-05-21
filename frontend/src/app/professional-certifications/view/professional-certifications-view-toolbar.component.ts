import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProfessionalCertificationsViewService } from 'src/app/professional-certifications/view/professional-certifications-view.service';
import { ProfessionalCertificationsService } from 'src/app/professional-certifications/professional-certifications.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ProfessionalCertificationsDestroyService } from 'src/app/professional-certifications/destroy/professional-certifications-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-professional-certifications-view-toolbar',
  templateUrl: './professional-certifications-view-toolbar.component.html',
})
export class ProfessionalCertificationsViewToolbarComponent {
  constructor(
    public service: ProfessionalCertificationsViewService,
    private professionalCertificationsService: ProfessionalCertificationsService,
    private destroyService: ProfessionalCertificationsDestroyService,
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
    return this.professionalCertificationsService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.professionalCertificationsService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.professionalCertificationsService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
