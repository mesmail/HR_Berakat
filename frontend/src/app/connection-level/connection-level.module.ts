import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ConnectionLevelRoutingModule,
  routedComponents,
} from 'src/app/connection-level/connection-level-routing.module';
import { ConnectionLevelListFilterComponent } from 'src/app/connection-level/list/filter/connection-level-list-filter.component';
import { ConnectionLevelListTableComponent } from 'src/app/connection-level/list/table/connection-level-list-table.component';
import { ConnectionLevelListToolbarComponent } from 'src/app/connection-level/list/toolbar/connection-level-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectionLevelViewToolbarComponent } from 'src/app/connection-level/view/connection-level-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ConnectionLevelImporterService } from 'src/app/connection-level/importer/connection-level-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ConnectionLevelListFilterComponent,
    ConnectionLevelListTableComponent,
    ConnectionLevelListToolbarComponent,
    ConnectionLevelViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ConnectionLevelRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ConnectionLevelImporterService,
    },
  ],
})
export class ConnectionLevelModule {}
