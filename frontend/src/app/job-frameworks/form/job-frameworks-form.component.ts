import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobFrameworksModel } from 'src/app/job-frameworks/job-frameworks-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-job-frameworks-form',
  templateUrl: './job-frameworks-form.component.html',
})
export class JobFrameworksFormComponent implements OnInit {
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
    return JobFrameworksModel.fields;
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
        this.fields.takeMultipleTasks,
        this.fields.impactSalary,
        this.fields.impactJobGrade,
      ],
      this.formBuilder,
    );
  }
}
