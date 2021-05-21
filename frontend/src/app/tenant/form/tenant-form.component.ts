import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TenantModel } from 'src/app/tenant/tenant-model';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
})
export class TenantFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;

  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return TenantModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);

    this.save.emit({ id, values });
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.record);
  }

  get frontendUrlHost() {
    return `.${environment.frontendUrl.host}`;
  }

  get tenantSubdomain() {
    return tenantSubdomain;
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.tenantName,
        tenantSubdomain.isEnabled && this.fields.tenantUrl,
      ].filter(Boolean),
      this.formBuilder,
    );
  }
}
