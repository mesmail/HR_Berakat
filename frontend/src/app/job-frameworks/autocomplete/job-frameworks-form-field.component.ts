import { Component, Input } from '@angular/core';
import { JobFrameworksFormModalService } from 'src/app/job-frameworks/form/job-frameworks-form-modal.service';
import { JobFrameworksService } from 'src/app/job-frameworks/job-frameworks.service';

@Component({
  selector: 'app-job-frameworks-form-field',
  templateUrl: './job-frameworks-form-field.component.html',
})
export class JobFrameworksFormFieldComponent {
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
    public service: JobFrameworksFormModalService,
    public jobFrameworksService: JobFrameworksService,
  ) {}

  public get hasPermissionToCreate() {
    return this.jobFrameworksService.hasPermissionToCreate;
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
