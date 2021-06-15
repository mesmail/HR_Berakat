import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TasksDutiesRoutingModule,
  routedComponents,
} from 'src/app/tasks-duties/tasks-duties-routing.module';
import { TasksDutiesListFilterComponent } from 'src/app/tasks-duties/list/filter/tasks-duties-list-filter.component';
import { TasksDutiesListTableComponent } from 'src/app/tasks-duties/list/table/tasks-duties-list-table.component';
import { TasksDutiesListToolbarComponent } from 'src/app/tasks-duties/list/toolbar/tasks-duties-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksDutiesViewToolbarComponent } from 'src/app/tasks-duties/view/tasks-duties-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TasksDutiesImporterService } from 'src/app/tasks-duties/importer/tasks-duties-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TasksDutiesListFilterComponent,
    TasksDutiesListTableComponent,
    TasksDutiesListToolbarComponent,
    TasksDutiesViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TasksDutiesRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TasksDutiesImporterService,
    },
  ],
})
export class TasksDutiesModule {}
