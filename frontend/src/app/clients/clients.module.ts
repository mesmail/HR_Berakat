import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ClientsRoutingModule,
  routedComponents,
} from 'src/app/clients/clients-routing.module';
import { ClientsListFilterComponent } from 'src/app/clients/list/filter/clients-list-filter.component';
import { ClientsListTableComponent } from 'src/app/clients/list/table/clients-list-table.component';
import { ClientsListToolbarComponent } from 'src/app/clients/list/toolbar/clients-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsViewToolbarComponent } from 'src/app/clients/view/clients-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ClientsImporterService } from 'src/app/clients/importer/clients-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ClientsListFilterComponent,
    ClientsListTableComponent,
    ClientsListToolbarComponent,
    ClientsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ClientsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ClientsImporterService,
    },
  ],
})
export class ClientsModule {}
