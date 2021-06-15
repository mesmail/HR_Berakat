import { Component, Input } from '@angular/core';
import { JobPathFormModalService } from 'src/app/job-path/form/job-path-form-modal.service';
import { JobPathService } from 'src/app/job-path/job-path.service';

@Component({
  selector: 'app-job-path-form-field',
  templateUrl: './job-path-form-field.component.html',
})
export class JobPathFormFieldComponent {
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
    public service: JobPathFormModalService,
    public jobPathService: JobPathService,
  ) {}

  public get hasPermissionToCreate() {
    return this.jobPathService.hasPermissionToCreate;
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
