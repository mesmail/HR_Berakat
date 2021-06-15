import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CardInformationRoutingModule,
  routedComponents,
} from 'src/app/card-information/card-information-routing.module';
import { CardInformationListFilterComponent } from 'src/app/card-information/list/filter/card-information-list-filter.component';
import { CardInformationListTableComponent } from 'src/app/card-information/list/table/card-information-list-table.component';
import { CardInformationListToolbarComponent } from 'src/app/card-information/list/toolbar/card-information-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardInformationViewToolbarComponent } from 'src/app/card-information/view/card-information-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CardInformationImporterService } from 'src/app/card-information/importer/card-information-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CardInformationListFilterComponent,
    CardInformationListTableComponent,
    CardInformationListToolbarComponent,
    CardInformationViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CardInformationRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CardInformationImporterService,
    },
  ],
})
export class CardInformationModule {}
