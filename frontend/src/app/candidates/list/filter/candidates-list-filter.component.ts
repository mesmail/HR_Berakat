import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { CandidatesListService } from 'src/app/candidates/list/candidates-list.service';
import { CandidatesModel } from 'src/app/candidates/candidates-model';

@Component({
  selector: 'app-candidates-list-filter',
  templateUrl: './candidates-list-filter.component.html',
})
export class CandidatesListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: CandidatesListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return CandidatesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  doRemove(key) {
    this.form.get(key).setValue(null);
    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  doToggleExpanded() {
    this.expanded = !this.expanded;
  }

  doFilter() {
    if (!this.form.valid) {
      return;
    }

    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  buildForm() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.doFilter();
    this.expanded = false;
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.candidateName,
        this.fields.currentPosition,
        this.fields.candidateReference,
        this.fields.gender,
        this.fields.academicCertificateSpecialization,
        this.fields.trainingCertificates,
        this.fields.currentCompany,
        this.fields.noticePeriodRange,
        this.fields.currentSalaryRange,
        this.fields.expectedSalaryRange,
        this.fields.softSkills,
        this.fields.managementSkills,
        this.fields.artisticSkills,
        this.fields.candidateCreatedDateRange,
        this.fields.jobs,
      ],
      this.formBuilder,
    );
  }
}
