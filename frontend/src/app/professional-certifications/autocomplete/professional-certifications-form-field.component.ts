import { Component, Input } from '@angular/core';
import { ProfessionalCertificationsFormModalService } from 'src/app/professional-certifications/form/professional-certifications-form-modal.service';
import { ProfessionalCertificationsService } from 'src/app/professional-certifications/professional-certifications.service';

@Component({
  selector: 'app-professional-certifications-form-field',
  templateUrl: './professional-certifications-form-field.component.html',
})
export class ProfessionalCertificationsFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;
  @Input() hint;
  @Input() placeholder;

  constructor(
    public service: ProfessionalCertificationsFormModalService,
    public professionalCertificationsService: ProfessionalCertificationsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.professionalCertificationsService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
