import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TellProblemModel } from 'src/app/tell-problem/tell-problem-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-tell-problem-form',
  templateUrl: './tell-problem-form.component.html',
})
export class TellProblemFormComponent implements OnInit {
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
    return TellProblemModel.fields;
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
        this.fields.problemDescription,
        this.fields.occuranceDate,
        this.fields.possibleCauses,
        this.fields.suggestedSolves,
      ],
      this.formBuilder,
    );
  }
}
