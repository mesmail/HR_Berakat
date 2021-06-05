import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveApplicationFormModel } from 'src/app/leave-application-form/leave-application-form-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-leave-application-form-form',
  templateUrl: './leave-application-form-form.component.html',
})
export class LeaveApplicationFormFormComponent implements OnInit {
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
    return LeaveApplicationFormModel.fields;
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
        this.fields.name,
        this.fields.position,
        this.fields.department,
        this.fields.date,
        this.fields.contactNo,
        this.fields.employeeNo,
        this.fields.absenceWork,
        this.fields.period,
        this.fields.specify,
        this.fields.reasons,
        this.fields.others,
        this.fields.noDays,
        this.fields.noTaken,
        this.fields.noBalance,
        this.fields.remarks,
        this.fields.status,
        this.fields.jobs,
      ],
      this.formBuilder,
    );
  }
}
