import { NgModule } from '@angular/core';
import {
  AuditLogRoutingModule,
  routedComponents,
} from 'src/app/audit-log/audit-log-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AuditLogTableComponent } from 'src/app/audit-log/list/audit-log-table.component';
import { AuditLogFilterComponent } from 'src/app/audit-log/list/audit-log-filter.component';
import { AuditLogToolbarComponent } from 'src/app/audit-log/list/audit-log-toolbar.component';

@NgModule({
  declarations: [
    AuditLogTableComponent,
    AuditLogFilterComponent,
    AuditLogToolbarComponent,
    ...routedComponents,
  ],
  imports: [
    SharedModule,
    AuditLogRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [],
})
export class AuditLogModule {}
