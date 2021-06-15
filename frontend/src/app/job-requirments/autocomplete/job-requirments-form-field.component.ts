import { Component, Input } from '@angular/core';
import { JobRequirmentsFormModalService } from 'src/app/job-requirments/form/job-requirments-form-modal.service';
import { JobRequirmentsService } from 'src/app/job-requirments/job-requirments.service';

@Component({
  selector: 'app-job-requirments-form-field',
  templateUrl: './job-requirments-form-field.component.html',
})
export class JobRequirmentsFormFieldComponent {
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
    public service: JobRequirmentsFormModalService,
    public jobRequirmentsService: JobRequirmentsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.jobRequirmentsService.hasPermissionToCreate;
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
