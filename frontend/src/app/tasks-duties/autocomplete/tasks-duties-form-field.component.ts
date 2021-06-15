import { Component, Input } from '@angular/core';
import { TasksDutiesFormModalService } from 'src/app/tasks-duties/form/tasks-duties-form-modal.service';
import { TasksDutiesService } from 'src/app/tasks-duties/tasks-duties.service';

@Component({
  selector: 'app-tasks-duties-form-field',
  templateUrl: './tasks-duties-form-field.component.html',
})
export class TasksDutiesFormFieldComponent {
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
    public service: TasksDutiesFormModalService,
    public tasksDutiesService: TasksDutiesService,
  ) {}

  public get hasPermissionToCreate() {
    return this.tasksDutiesService.hasPermissionToCreate;
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
