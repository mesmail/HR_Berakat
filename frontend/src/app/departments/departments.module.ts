import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  DepartmentsRoutingModule,
  routedComponents,
} from 'src/app/departments/departments-routing.module';
import { DepartmentsListFilterComponent } from 'src/app/departments/list/filter/departments-list-filter.component';
import { DepartmentsListTableComponent } from 'src/app/departments/list/table/departments-list-table.component';
import { DepartmentsListToolbarComponent } from 'src/app/departments/list/toolbar/departments-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentsViewToolbarComponent } from 'src/app/departments/view/departments-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { DepartmentsImporterService } from 'src/app/departments/importer/departments-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    DepartmentsListFilterComponent,
    DepartmentsListTableComponent,
    DepartmentsListToolbarComponent,
    DepartmentsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    DepartmentsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: DepartmentsImporterService,
    },
  ],
})
export class DepartmentsModule {}
