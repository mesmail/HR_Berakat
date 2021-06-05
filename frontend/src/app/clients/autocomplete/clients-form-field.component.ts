import { Component, Input } from '@angular/core';
import { ClientsFormModalService } from 'src/app/clients/form/clients-form-modal.service';
import { ClientsService } from 'src/app/clients/clients.service';

@Component({
  selector: 'app-clients-form-field',
  templateUrl: './clients-form-field.component.html',
})
export class ClientsFormFieldComponent {
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
    public service: ClientsFormModalService,
    public clientsService: ClientsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.clientsService.hasPermissionToCreate;
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
