import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  AdvancedPaymentRoutingModule,
  routedComponents,
} from 'src/app/advanced-payment/advanced-payment-routing.module';
import { AdvancedPaymentListFilterComponent } from 'src/app/advanced-payment/list/filter/advanced-payment-list-filter.component';
import { AdvancedPaymentListTableComponent } from 'src/app/advanced-payment/list/table/advanced-payment-list-table.component';
import { AdvancedPaymentListToolbarComponent } from 'src/app/advanced-payment/list/toolbar/advanced-payment-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdvancedPaymentViewToolbarComponent } from 'src/app/advanced-payment/view/advanced-payment-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { AdvancedPaymentImporterService } from 'src/app/advanced-payment/importer/advanced-payment-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    AdvancedPaymentListFilterComponent,
    AdvancedPaymentListTableComponent,
    AdvancedPaymentListToolbarComponent,
    AdvancedPaymentViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    AdvancedPaymentRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: AdvancedPaymentImporterService,
    },
  ],
})
export class AdvancedPaymentModule {}
