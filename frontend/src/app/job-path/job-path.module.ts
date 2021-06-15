import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  JobPathRoutingModule,
  routedComponents,
} from 'src/app/job-path/job-path-routing.module';
import { JobPathListFilterComponent } from 'src/app/job-path/list/filter/job-path-list-filter.component';
import { JobPathListTableComponent } from 'src/app/job-path/list/table/job-path-list-table.component';
import { JobPathListToolbarComponent } from 'src/app/job-path/list/toolbar/job-path-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobPathViewToolbarComponent } from 'src/app/job-path/view/job-path-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { JobPathImporterService } from 'src/app/job-path/importer/job-path-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    JobPathListFilterComponent,
    JobPathListTableComponent,
    JobPathListToolbarComponent,
    JobPathViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    JobPathRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: JobPathImporterService,
    },
  ],
})
export class JobPathModule {}
