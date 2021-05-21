import { Component, Input } from '@angular/core';
import { TrainingCertificatesFormModalService } from 'src/app/training-certificates/form/training-certificates-form-modal.service';
import { TrainingCertificatesService } from 'src/app/training-certificates/training-certificates.service';

@Component({
  selector: 'app-training-certificates-form-field',
  templateUrl: './training-certificates-form-field.component.html',
})
export class TrainingCertificatesFormFieldComponent {
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
    public service: TrainingCertificatesFormModalService,
    public trainingCertificatesService: TrainingCertificatesService,
  ) {}

  public get hasPermissionToCreate() {
    return this.trainingCertificatesService.hasPermissionToCreate;
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
