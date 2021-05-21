import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuditLogModel } from 'src/app/audit-log/audit-log-model';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { FilterSchema } from 'src/app/shared/form/filter-schema';

@Component({
  selector: 'app-audit-log-filter',
  templateUrl: './audit-log-filter.component.html',
})
export class AuditLogFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private auditLogService: AuditLogService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return AuditLogModel.fields;
  }

  get loading() {
    return this.auditLogService.loading;
  }

  doRemove(key) {
    this.form.get(key).setValue(null);
    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.auditLogService.doFetch(values);
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
    return this.auditLogService.doFetch(values);
  }

  buildForm() {
    const { filter } = this.auditLogService;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.auditLogService.doReset();
    this.expanded = false;
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.entityId,
        this.fields.action,
        this.fields.createdByEmail,
        this.fields.entityNames,
        this.fields.timestampRange,
      ],
      this.formBuilder,
    );
  }
}
