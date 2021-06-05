import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProfessionalCertificationsListService } from 'src/app/professional-certifications/list/professional-certifications-list.service';
import { ProfessionalCertificationsService } from 'src/app/professional-certifications/professional-certifications.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProfessionalCertificationsDestroyService } from 'src/app/professional-certifications/destroy/professional-certifications-destroy.service';

@Component({
  selector: 'app-professional-certifications-list-toolbar',
  templateUrl: './professional-certifications-list-toolbar.component.html',
})
export class ProfessionalCertificationsListToolbarComponent {
  constructor(
    public service: ProfessionalCertificationsListService,
    private professionalCertificationsService: ProfessionalCertificationsService,
    private destroyService: ProfessionalCertificationsDestroyService,
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
    return this.professionalCertificationsService.hasPermissionToCreate;
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
