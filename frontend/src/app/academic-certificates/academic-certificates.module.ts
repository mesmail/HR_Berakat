import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  AcademicCertificatesRoutingModule,
  routedComponents,
} from 'src/app/academic-certificates/academic-certificates-routing.module';
import { AcademicCertificatesListFilterComponent } from 'src/app/academic-certificates/list/filter/academic-certificates-list-filter.component';
import { AcademicCertificatesListTableComponent } from 'src/app/academic-certificates/list/table/academic-certificates-list-table.component';
import { AcademicCertificatesListToolbarComponent } from 'src/app/academic-certificates/list/toolbar/academic-certificates-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcademicCertificatesViewToolbarComponent } from 'src/app/academic-certificates/view/academic-certificates-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { AcademicCertificatesImporterService } from 'src/app/academic-certificates/importer/academic-certificates-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    AcademicCertificatesListFilterComponent,
    AcademicCertificatesListTableComponent,
    AcademicCertificatesListToolbarComponent,
    AcademicCertificatesViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    AcademicCertificatesRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: AcademicCertificatesImporterService,
    },
  ],
})
export class AcademicCertificatesModule {}
