import { Component, Input } from '@angular/core';
import { ClaimFormModalService } from 'src/app/claim/form/claim-form-modal.service';
import { ClaimService } from 'src/app/claim/claim.service';

@Component({
  selector: 'app-claim-form-field',
  templateUrl: './claim-form-field.component.html',
})
export class ClaimFormFieldComponent {
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
    public service: ClaimFormModalService,
    public claimService: ClaimService,
  ) {}

  public get hasPermissionToCreate() {
    return this.claimService.hasPermissionToCreate;
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
