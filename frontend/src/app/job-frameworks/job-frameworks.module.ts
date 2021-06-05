import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  JobFrameworksRoutingModule,
  routedComponents,
} from 'src/app/job-frameworks/job-frameworks-routing.module';
import { JobFrameworksListFilterComponent } from 'src/app/job-frameworks/list/filter/job-frameworks-list-filter.component';
import { JobFrameworksListTableComponent } from 'src/app/job-frameworks/list/table/job-frameworks-list-table.component';
import { JobFrameworksListToolbarComponent } from 'src/app/job-frameworks/list/toolbar/job-frameworks-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobFrameworksViewToolbarComponent } from 'src/app/job-frameworks/view/job-frameworks-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { JobFrameworksImporterService } from 'src/app/job-frameworks/importer/job-frameworks-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    JobFrameworksListFilterComponent,
    JobFrameworksListTableComponent,
    JobFrameworksListToolbarComponent,
    JobFrameworksViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    JobFrameworksRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: JobFrameworksImporterService,
    },
  ],
})
export class JobFrameworksModule {}
