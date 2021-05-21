import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsModel } from 'src/app/jobs/jobs-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
})
export class JobsFormComponent implements OnInit {
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
    return JobsModel.fields;
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
        this.fields.positionName,
        this.fields.department,
        this.fields.supervisor,
        this.fields.jobLocation,
        this.fields.jobCode,
        this.fields.releaseDate,
        this.fields.generalDescription,
        this.fields.generalGoals,
        this.fields.detailedGoals,
        this.fields.personalAndTechnicalSkills,
      ],
      this.formBuilder,
    );
  }
}
