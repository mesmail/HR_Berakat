import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ClaimRoutingModule,
  routedComponents,
} from 'src/app/claim/claim-routing.module';
import { ClaimListFilterComponent } from 'src/app/claim/list/filter/claim-list-filter.component';
import { ClaimListTableComponent } from 'src/app/claim/list/table/claim-list-table.component';
import { ClaimListToolbarComponent } from 'src/app/claim/list/toolbar/claim-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClaimViewToolbarComponent } from 'src/app/claim/view/claim-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ClaimImporterService } from 'src/app/claim/importer/claim-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ClaimListFilterComponent,
    ClaimListTableComponent,
    ClaimListToolbarComponent,
    ClaimViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ClaimRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ClaimImporterService,
    },
  ],
})
export class ClaimModule {}
