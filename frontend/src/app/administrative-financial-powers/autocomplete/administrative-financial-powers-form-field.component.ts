import { Component, Input } from '@angular/core';
import { AdministrativeFinancialPowersFormModalService } from 'src/app/administrative-financial-powers/form/administrative-financial-powers-form-modal.service';
import { AdministrativeFinancialPowersService } from 'src/app/administrative-financial-powers/administrative-financial-powers.service';

@Component({
  selector: 'app-administrative-financial-powers-form-field',
  templateUrl: './administrative-financial-powers-form-field.component.html',
})
export class AdministrativeFinancialPowersFormFieldComponent {
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
    public service: AdministrativeFinancialPowersFormModalService,
    public administrativeFinancialPowersService: AdministrativeFinancialPowersService,
  ) {}

  public get hasPermissionToCreate() {
    return this.administrativeFinancialPowersService.hasPermissionToCreate;
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
