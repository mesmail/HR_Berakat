import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { JobsListService } from 'src/app/jobs/list/jobs-list.service';
import { JobsModel } from 'src/app/jobs/jobs-model';

@Component({
  selector: 'app-jobs-list-filter',
  templateUrl: './jobs-list-filter.component.html',
})
export class JobsListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: JobsListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return JobsModel.fields;
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
        this.fields.positionName,
        this.fields.department,
        this.fields.supervisor,
        this.fields.jobLocation,
        this.fields.jobCode,
        this.fields.releaseDateRange,
        this.fields.generalDescription,
        this.fields.generalGoals,
        this.fields.detailedGoals,
        this.fields.personalAndTechnicalSkills,
      ],
      this.formBuilder,
    );
  }
}
