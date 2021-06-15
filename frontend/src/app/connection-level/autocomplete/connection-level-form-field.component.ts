import { Component, Input } from '@angular/core';
import { ConnectionLevelFormModalService } from 'src/app/connection-level/form/connection-level-form-modal.service';
import { ConnectionLevelService } from 'src/app/connection-level/connection-level.service';

@Component({
  selector: 'app-connection-level-form-field',
  templateUrl: './connection-level-form-field.component.html',
})
export class ConnectionLevelFormFieldComponent {
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
    public service: ConnectionLevelFormModalService,
    public connectionLevelService: ConnectionLevelService,
  ) {}

  public get hasPermissionToCreate() {
    return this.connectionLevelService.hasPermissionToCreate;
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
