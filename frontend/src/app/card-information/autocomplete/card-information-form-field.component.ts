import { Component, Input } from '@angular/core';
import { CardInformationFormModalService } from 'src/app/card-information/form/card-information-form-modal.service';
import { CardInformationService } from 'src/app/card-information/card-information.service';

@Component({
  selector: 'app-card-information-form-field',
  templateUrl: './card-information-form-field.component.html',
})
export class CardInformationFormFieldComponent {
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
    public service: CardInformationFormModalService,
    public cardInformationService: CardInformationService,
  ) {}

  public get hasPermissionToCreate() {
    return this.cardInformationService.hasPermissionToCreate;
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
