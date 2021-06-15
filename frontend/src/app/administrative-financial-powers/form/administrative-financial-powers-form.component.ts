import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdministrativeFinancialPowersModel } from 'src/app/administrative-financial-powers/administrative-financial-powers-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-administrative-financial-powers-form',
  templateUrl: './administrative-financial-powers-form.component.html',
})
export class AdministrativeFinancialPowersFormComponent implements OnInit {
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
    return AdministrativeFinancialPowersModel.fields;
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

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.administrativeFinancialPowers,
      ],
      this.formBuilder,
    );
  }
}
