import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  EmploymentContractRoutingModule,
  routedComponents,
} from 'src/app/employment-contract/employment-contract-routing.module';
import { EmploymentContractListFilterComponent } from 'src/app/employment-contract/list/filter/employment-contract-list-filter.component';
import { EmploymentContractListTableComponent } from 'src/app/employment-contract/list/table/employment-contract-list-table.component';
import { EmploymentContractListToolbarComponent } from 'src/app/employment-contract/list/toolbar/employment-contract-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmploymentContractViewToolbarComponent } from 'src/app/employment-contract/view/employment-contract-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { EmploymentContractImporterService } from 'src/app/employment-contract/importer/employment-contract-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    EmploymentContractListFilterComponent,
    EmploymentContractListTableComponent,
    EmploymentContractListToolbarComponent,
    EmploymentContractViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    EmploymentContractRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: EmploymentContractImporterService,
    },
  ],
})
export class EmploymentContractModule {}
