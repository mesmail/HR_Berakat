import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CommonComiteesRoutingModule,
  routedComponents,
} from 'src/app/common-comitees/common-comitees-routing.module';
import { CommonComiteesListFilterComponent } from 'src/app/common-comitees/list/filter/common-comitees-list-filter.component';
import { CommonComiteesListTableComponent } from 'src/app/common-comitees/list/table/common-comitees-list-table.component';
import { CommonComiteesListToolbarComponent } from 'src/app/common-comitees/list/toolbar/common-comitees-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonComiteesViewToolbarComponent } from 'src/app/common-comitees/view/common-comitees-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CommonComiteesImporterService } from 'src/app/common-comitees/importer/common-comitees-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CommonComiteesListFilterComponent,
    CommonComiteesListTableComponent,
    CommonComiteesListToolbarComponent,
    CommonComiteesViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CommonComiteesRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CommonComiteesImporterService,
    },
  ],
})
export class CommonComiteesModule {}
