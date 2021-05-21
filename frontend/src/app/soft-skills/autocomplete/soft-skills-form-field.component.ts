import { Component, Input } from '@angular/core';
import { SoftSkillsFormModalService } from 'src/app/soft-skills/form/soft-skills-form-modal.service';
import { SoftSkillsService } from 'src/app/soft-skills/soft-skills.service';

@Component({
  selector: 'app-soft-skills-form-field',
  templateUrl: './soft-skills-form-field.component.html',
})
export class SoftSkillsFormFieldComponent {
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
    public service: SoftSkillsFormModalService,
    public softSkillsService: SoftSkillsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.softSkillsService.hasPermissionToCreate;
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
