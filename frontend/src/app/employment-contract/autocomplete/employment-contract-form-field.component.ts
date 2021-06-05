import { Component, Input } from '@angular/core';
import { EmploymentContractFormModalService } from 'src/app/employment-contract/form/employment-contract-form-modal.service';
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';

@Component({
  selector: 'app-employment-contract-form-field',
  templateUrl: './employment-contract-form-field.component.html',
})
export class EmploymentContractFormFieldComponent {
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
    public service: EmploymentContractFormModalService,
    public employmentContractService: EmploymentContractService,
  ) {}

  public get hasPermissionToCreate() {
    return this.employmentContractService.hasPermissionToCreate;
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
