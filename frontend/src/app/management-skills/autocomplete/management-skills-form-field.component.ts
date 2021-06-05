import { Component, Input } from '@angular/core';
import { ManagementSkillsFormModalService } from 'src/app/management-skills/form/management-skills-form-modal.service';
import { ManagementSkillsService } from 'src/app/management-skills/management-skills.service';

@Component({
  selector: 'app-management-skills-form-field',
  templateUrl: './management-skills-form-field.component.html',
})
export class ManagementSkillsFormFieldComponent {
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
    public service: ManagementSkillsFormModalService,
    public managementSkillsService: ManagementSkillsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.managementSkillsService.hasPermissionToCreate;
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
