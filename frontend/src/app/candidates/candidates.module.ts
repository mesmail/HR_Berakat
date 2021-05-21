import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CandidatesRoutingModule,
  routedComponents,
} from 'src/app/candidates/candidates-routing.module';
import { CandidatesListFilterComponent } from 'src/app/candidates/list/filter/candidates-list-filter.component';
import { CandidatesListTableComponent } from 'src/app/candidates/list/table/candidates-list-table.component';
import { CandidatesListToolbarComponent } from 'src/app/candidates/list/toolbar/candidates-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidatesViewToolbarComponent } from 'src/app/candidates/view/candidates-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CandidatesImporterService } from 'src/app/candidates/importer/candidates-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CandidatesListFilterComponent,
    CandidatesListTableComponent,
    CandidatesListToolbarComponent,
    CandidatesViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CandidatesRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CandidatesImporterService,
    },
  ],
})
export class CandidatesModule {}
