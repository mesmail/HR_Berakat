import { Component, Input } from '@angular/core';
import { LeaveApplicationFormFormModalService } from 'src/app/leave-application-form/form/leave-application-form-form-modal.service';
import { LeaveApplicationFormService } from 'src/app/leave-application-form/leave-application-form.service';

@Component({
  selector: 'app-leave-application-form-form-field',
  templateUrl: './leave-application-form-form-field.component.html',
})
export class LeaveApplicationFormFormFieldComponent {
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
    public service: LeaveApplicationFormFormModalService,
    public leaveApplicationFormService: LeaveApplicationFormService,
  ) {}

  public get hasPermissionToCreate() {
    return this.leaveApplicationFormService.hasPermissionToCreate;
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
