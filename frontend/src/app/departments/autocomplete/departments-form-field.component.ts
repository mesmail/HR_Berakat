import { Component, Input } from '@angular/core';
import { DepartmentsFormModalService } from 'src/app/departments/form/departments-form-modal.service';
import { DepartmentsService } from 'src/app/departments/departments.service';

@Component({
  selector: 'app-departments-form-field',
  templateUrl: './departments-form-field.component.html',
})
export class DepartmentsFormFieldComponent {
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
    public service: DepartmentsFormModalService,
    public departmentsService: DepartmentsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.departmentsService.hasPermissionToCreate;
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
