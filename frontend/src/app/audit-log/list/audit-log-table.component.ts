import { Component } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AuditLogModel } from 'src/app/audit-log/audit-log-model';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-audit-log-table',
  templateUrl: './audit-log-table.component.html',
})
export class AuditLogTableComponent {
  constructor(public service: AuditLogService) {}

  view(values) {
    const data = JSON.stringify(values, null, 2);
    const jsonWindow = window.open(
      '',
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400',
    );
    jsonWindow.document.write(`<pre>${data}</pre>`);
  }

  presenter(row, fieldName) {
    return AuditLogModel.presenter(row, fieldName);
  }

  get fields() {
    return AuditLogModel.fields;
  }

  i18n(key) {
    return i18n(key);
  }

  get columns() {
    return [
      this.fields.timestamp.name,
      this.fields.createdByEmail.name,
      this.fields.entityName.name,
      this.fields.action.name,
      this.fields.entityId.name,
      this.fields.values.name,
    ];
  }
}
