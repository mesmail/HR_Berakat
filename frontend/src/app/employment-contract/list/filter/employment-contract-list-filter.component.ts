import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { EmploymentContractListService } from 'src/app/employment-contract/list/employment-contract-list.service';
import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';

@Component({
  selector: 'app-employment-contract-list-filter',
  templateUrl: './employment-contract-list-filter.component.html',
})
export class EmploymentContractListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: EmploymentContractListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return EmploymentContractModel.fields;
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
        this.fields.contractDateRange,
        this.fields.companyRepresentative,
        this.fields.secondParty,
        this.fields.nationality,
        this.fields.passportNumber,
        this.fields.passportIssueDateRange,
        this.fields.email,
        this.fields.jobTitle,
        this.fields.dailyWorkingHoursRange,
        this.fields.weeklyWorkingHoursRange,
        this.fields.weekEndDay,
        this.fields.workStartDateRange,
        this.fields.employeeName,
        this.fields.positionName,
        this.fields.basicSalaryRange,
      ],
      this.formBuilder,
    );
  }
}
