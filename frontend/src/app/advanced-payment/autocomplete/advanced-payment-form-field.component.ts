import { Component, Input } from '@angular/core';
import { AdvancedPaymentFormModalService } from 'src/app/advanced-payment/form/advanced-payment-form-modal.service';
import { AdvancedPaymentService } from 'src/app/advanced-payment/advanced-payment.service';

@Component({
  selector: 'app-advanced-payment-form-field',
  templateUrl: './advanced-payment-form-field.component.html',
})
export class AdvancedPaymentFormFieldComponent {
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
    public service: AdvancedPaymentFormModalService,
    public advancedPaymentService: AdvancedPaymentService,
  ) {}

  public get hasPermissionToCreate() {
    return this.advancedPaymentService.hasPermissionToCreate;
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
