import { Component, Input } from '@angular/core';
import { AcademicCertificatesFormModalService } from 'src/app/academic-certificates/form/academic-certificates-form-modal.service';
import { AcademicCertificatesService } from 'src/app/academic-certificates/academic-certificates.service';

@Component({
  selector: 'app-academic-certificates-form-field',
  templateUrl: './academic-certificates-form-field.component.html',
})
export class AcademicCertificatesFormFieldComponent {
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
    public service: AcademicCertificatesFormModalService,
    public academicCertificatesService: AcademicCertificatesService,
  ) {}

  public get hasPermissionToCreate() {
    return this.academicCertificatesService.hasPermissionToCreate;
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
