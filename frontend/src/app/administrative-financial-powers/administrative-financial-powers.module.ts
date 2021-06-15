import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  AdministrativeFinancialPowersRoutingModule,
  routedComponents,
} from 'src/app/administrative-financial-powers/administrative-financial-powers-routing.module';
import { AdministrativeFinancialPowersListFilterComponent } from 'src/app/administrative-financial-powers/list/filter/administrative-financial-powers-list-filter.component';
import { AdministrativeFinancialPowersListTableComponent } from 'src/app/administrative-financial-powers/list/table/administrative-financial-powers-list-table.component';
import { AdministrativeFinancialPowersListToolbarComponent } from 'src/app/administrative-financial-powers/list/toolbar/administrative-financial-powers-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdministrativeFinancialPowersViewToolbarComponent } from 'src/app/administrative-financial-powers/view/administrative-financial-powers-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { AdministrativeFinancialPowersImporterService } from 'src/app/administrative-financial-powers/importer/administrative-financial-powers-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    AdministrativeFinancialPowersListFilterComponent,
    AdministrativeFinancialPowersListTableComponent,
    AdministrativeFinancialPowersListToolbarComponent,
    AdministrativeFinancialPowersViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    AdministrativeFinancialPowersRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: AdministrativeFinancialPowersImporterService,
    },
  ],
})
export class AdministrativeFinancialPowersModule {}
