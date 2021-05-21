import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TenantRoutingModule,
  routedComponents,
} from 'src/app/tenant/tenant-routing.module';
import { TenantListTableComponent } from 'src/app/tenant/list/table/tenant-list-table.component';
import { TenantListToolbarComponent } from 'src/app/tenant/list/toolbar/tenant-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TenantListTableComponent,
    TenantListToolbarComponent,
  ],
  imports: [
    SharedModule,
    TenantRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
})
export class TenantModule {}
