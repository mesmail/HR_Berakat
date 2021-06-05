import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  JobsRoutingModule,
  routedComponents,
} from 'src/app/jobs/jobs-routing.module';
import { JobsListFilterComponent } from 'src/app/jobs/list/filter/jobs-list-filter.component';
import { JobsListTableComponent } from 'src/app/jobs/list/table/jobs-list-table.component';
import { JobsListToolbarComponent } from 'src/app/jobs/list/toolbar/jobs-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobsViewToolbarComponent } from 'src/app/jobs/view/jobs-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { JobsImporterService } from 'src/app/jobs/importer/jobs-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    JobsListFilterComponent,
    JobsListTableComponent,
    JobsListToolbarComponent,
    JobsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    JobsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: JobsImporterService,
    },
  ],
})
export class JobsModule {}
