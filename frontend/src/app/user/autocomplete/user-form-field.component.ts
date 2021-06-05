import { Component, Input } from '@angular/core';
import { UserNewFormModalService } from '../form/user-new-form-modal.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-field',
  templateUrl: './user-form-field.component.html',
})
export class UserFormFieldComponent {
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

  constructor(
    public service: UserNewFormModalService,
    public userService: UserService,
  ) {}

  public get hasPermissionToCreate() {
    return this.userService.hasPermissionToCreate;
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
