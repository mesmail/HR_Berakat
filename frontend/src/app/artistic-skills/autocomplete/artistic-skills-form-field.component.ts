import { Component, Input } from '@angular/core';
import { ArtisticSkillsFormModalService } from 'src/app/artistic-skills/form/artistic-skills-form-modal.service';
import { ArtisticSkillsService } from 'src/app/artistic-skills/artistic-skills.service';

@Component({
  selector: 'app-artistic-skills-form-field',
  templateUrl: './artistic-skills-form-field.component.html',
})
export class ArtisticSkillsFormFieldComponent {
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
    public service: ArtisticSkillsFormModalService,
    public artisticSkillsService: ArtisticSkillsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.artisticSkillsService.hasPermissionToCreate;
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
