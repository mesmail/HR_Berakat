import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { LeaveApplicationFormListService } from 'src/app/leave-application-form/list/leave-application-form-list.service';
import { LeaveApplicationFormModel } from 'src/app/leave-application-form/leave-application-form-model';

@Component({
  selector: 'app-leave-application-form-list-filter',
  templateUrl: './leave-application-form-list-filter.component.html',
})
export class LeaveApplicationFormListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: LeaveApplicationFormListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return LeaveApplicationFormModel.fields;
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
        this.fields.name,
        this.fields.position,
        this.fields.department,
        this.fields.dateRange,
        this.fields.contactNo,
        this.fields.employeeNo,
        this.fields.absenceWorkRange,
        this.fields.periodRange,
        this.fields.specify,
        this.fields.reasons,
        this.fields.others,
        this.fields.noDaysRange,
        this.fields.noTakenRange,
        this.fields.noBalanceRange,
        this.fields.remarks,
        this.fields.status,
      ],
      this.formBuilder,
    );
  }
}
