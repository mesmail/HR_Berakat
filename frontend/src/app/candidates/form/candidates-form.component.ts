import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidatesModel } from 'src/app/candidates/candidates-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-candidates-form',
  templateUrl: './candidates-form.component.html',
})
export class CandidatesFormComponent implements OnInit {
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
    return CandidatesModel.fields;
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
        this.fields.candidateName,
        this.fields.currentPosition,
        this.fields.candidateReference,
        this.fields.gender,
        this.fields.academicCertificateSpecialization,
        this.fields.trainingCertificates,
        this.fields.currentCompany,
        this.fields.noticePeriod,
        this.fields.currentSalary,
        this.fields.expectedSalary,
        this.fields.softSkills,
        this.fields.managementSkills,
        this.fields.artisticSkills,
        this.fields.candidateCreatedDate,
        this.fields.jobs,
        this.fields.resume,
        this.fields.photo,
        this.fields.tactLevel,
        this.fields.yearsExperience,
      ],
      this.formBuilder,
    );
  }
}
