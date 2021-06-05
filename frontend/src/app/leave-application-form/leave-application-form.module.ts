import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  LeaveApplicationFormRoutingModule,
  routedComponents,
} from 'src/app/leave-application-form/leave-application-form-routing.module';
import { LeaveApplicationFormListFilterComponent } from 'src/app/leave-application-form/list/filter/leave-application-form-list-filter.component';
import { LeaveApplicationFormListTableComponent } from 'src/app/leave-application-form/list/table/leave-application-form-list-table.component';
import { LeaveApplicationFormListToolbarComponent } from 'src/app/leave-application-form/list/toolbar/leave-application-form-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaveApplicationFormViewToolbarComponent } from 'src/app/leave-application-form/view/leave-application-form-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { LeaveApplicationFormImporterService } from 'src/app/leave-application-form/importer/leave-application-form-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    LeaveApplicationFormListFilterComponent,
    LeaveApplicationFormListTableComponent,
    LeaveApplicationFormListToolbarComponent,
    LeaveApplicationFormViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    LeaveApplicationFormRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: LeaveApplicationFormImporterService,
    },
  ],
})
export class LeaveApplicationFormModule {}
