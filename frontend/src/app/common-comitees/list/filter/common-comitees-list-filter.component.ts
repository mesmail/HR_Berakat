import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { CommonComiteesListService } from 'src/app/common-comitees/list/common-comitees-list.service';
import { CommonComiteesModel } from 'src/app/common-comitees/common-comitees-model';

@Component({
  selector: 'app-common-comitees-list-filter',
  templateUrl: './common-comitees-list-filter.component.html',
})
export class CommonComiteesListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: CommonComiteesListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return CommonComiteesModel.fields;
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
        this.fields.addedCommittee,
        this.fields.menus,
      ],
      this.formBuilder,
    );
  }
}
