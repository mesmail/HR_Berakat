import { Component, Input } from '@angular/core';
import { CommonComiteesFormModalService } from 'src/app/common-comitees/form/common-comitees-form-modal.service';
import { CommonComiteesService } from 'src/app/common-comitees/common-comitees.service';

@Component({
  selector: 'app-common-comitees-form-field',
  templateUrl: './common-comitees-form-field.component.html',
})
export class CommonComiteesFormFieldComponent {
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
    public service: CommonComiteesFormModalService,
    public commonComiteesService: CommonComiteesService,
  ) {}

  public get hasPermissionToCreate() {
    return this.commonComiteesService.hasPermissionToCreate;
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
