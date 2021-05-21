import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TrainingCertificatesRoutingModule,
  routedComponents,
} from 'src/app/training-certificates/training-certificates-routing.module';
import { TrainingCertificatesListFilterComponent } from 'src/app/training-certificates/list/filter/training-certificates-list-filter.component';
import { TrainingCertificatesListTableComponent } from 'src/app/training-certificates/list/table/training-certificates-list-table.component';
import { TrainingCertificatesListToolbarComponent } from 'src/app/training-certificates/list/toolbar/training-certificates-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingCertificatesViewToolbarComponent } from 'src/app/training-certificates/view/training-certificates-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TrainingCertificatesImporterService } from 'src/app/training-certificates/importer/training-certificates-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TrainingCertificatesListFilterComponent,
    TrainingCertificatesListTableComponent,
    TrainingCertificatesListToolbarComponent,
    TrainingCertificatesViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TrainingCertificatesRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TrainingCertificatesImporterService,
    },
  ],
})
export class TrainingCertificatesModule {}
