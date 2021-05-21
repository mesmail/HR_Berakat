import { Component, Input } from '@angular/core';
import { UsersNewFormModalService } from 'src/app/users-new/form/users-new-form-modal.service';
import { UsersNewService } from 'src/app/users-new/users-new.service';

@Component({
  selector: 'app-users-new-form-field',
  templateUrl: './users-new-form-field.component.html',
})
export class UsersNewFormFieldComponent {
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
    public service: UsersNewFormModalService,
    public usersNewService: UsersNewService,
  ) {}

  public get hasPermissionToCreate() {
    return this.usersNewService.hasPermissionToCreate;
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
