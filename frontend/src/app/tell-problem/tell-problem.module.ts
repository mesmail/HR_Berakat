import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TellProblemRoutingModule,
  routedComponents,
} from 'src/app/tell-problem/tell-problem-routing.module';
import { TellProblemListFilterComponent } from 'src/app/tell-problem/list/filter/tell-problem-list-filter.component';
import { TellProblemListTableComponent } from 'src/app/tell-problem/list/table/tell-problem-list-table.component';
import { TellProblemListToolbarComponent } from 'src/app/tell-problem/list/toolbar/tell-problem-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TellProblemViewToolbarComponent } from 'src/app/tell-problem/view/tell-problem-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TellProblemImporterService } from 'src/app/tell-problem/importer/tell-problem-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TellProblemListFilterComponent,
    TellProblemListTableComponent,
    TellProblemListToolbarComponent,
    TellProblemViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TellProblemRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TellProblemImporterService,
    },
  ],
})
export class TellProblemModule {}
