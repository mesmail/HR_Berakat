import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-employment-contract-form',
  templateUrl: './employment-contract-form.component.html',
})
export class EmploymentContractFormComponent implements OnInit {
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
    return EmploymentContractModel.fields;
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
        this.fields.contractDate,
        this.fields.companyRepresentative,
        this.fields.secondParty,
        this.fields.nationality,
        this.fields.passportNumber,
        this.fields.passportIssueDate,
        this.fields.email,
        this.fields.jobTitle,
        this.fields.dailyWorkingHours,
        this.fields.weeklyWorkingHours,
        this.fields.weekEndDay,
        this.fields.workStartDate,
        this.fields.employeeName,
        this.fields.positionName,
        this.fields.basicSalary,
      ],
      this.formBuilder,
    );
  }
}
