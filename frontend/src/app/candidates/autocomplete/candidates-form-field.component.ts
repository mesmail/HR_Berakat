import { Component, Input } from '@angular/core';
import { CandidatesFormModalService } from 'src/app/candidates/form/candidates-form-modal.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';

@Component({
  selector: 'app-candidates-form-field',
  templateUrl: './candidates-form-field.component.html',
})
export class CandidatesFormFieldComponent {
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
    public service: CandidatesFormModalService,
    public candidatesService: CandidatesService,
  ) {}

  public get hasPermissionToCreate() {
    return this.candidatesService.hasPermissionToCreate;
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
