import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  JobRequirmentsRoutingModule,
  routedComponents,
} from 'src/app/job-requirments/job-requirments-routing.module';
import { JobRequirmentsListFilterComponent } from 'src/app/job-requirments/list/filter/job-requirments-list-filter.component';
import { JobRequirmentsListTableComponent } from 'src/app/job-requirments/list/table/job-requirments-list-table.component';
import { JobRequirmentsListToolbarComponent } from 'src/app/job-requirments/list/toolbar/job-requirments-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobRequirmentsViewToolbarComponent } from 'src/app/job-requirments/view/job-requirments-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { JobRequirmentsImporterService } from 'src/app/job-requirments/importer/job-requirments-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    JobRequirmentsListFilterComponent,
    JobRequirmentsListTableComponent,
    JobRequirmentsListToolbarComponent,
    JobRequirmentsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    JobRequirmentsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: JobRequirmentsImporterService,
    },
  ],
})
export class JobRequirmentsModule {}
