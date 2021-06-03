import { Component, Input } from '@angular/core';
import { TellProblemFormModalService } from 'src/app/tell-problem/form/tell-problem-form-modal.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';

@Component({
  selector: 'app-tell-problem-form-field',
  templateUrl: './tell-problem-form-field.component.html',
})
export class TellProblemFormFieldComponent {
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
    public service: TellProblemFormModalService,
    public tellProblemService: TellProblemService,
  ) {}

  public get hasPermissionToCreate() {
    return this.tellProblemService.hasPermissionToCreate;
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
