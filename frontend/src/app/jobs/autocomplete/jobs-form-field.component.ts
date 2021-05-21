import { Component, Input } from '@angular/core';
import { JobsFormModalService } from 'src/app/jobs/form/jobs-form-modal.service';
import { JobsService } from 'src/app/jobs/jobs.service';

@Component({
  selector: 'app-jobs-form-field',
  templateUrl: './jobs-form-field.component.html',
})
export class JobsFormFieldComponent {
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
    public service: JobsFormModalService,
    public jobsService: JobsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.jobsService.hasPermissionToCreate;
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
