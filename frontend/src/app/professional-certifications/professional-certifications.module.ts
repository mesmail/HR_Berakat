import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ProfessionalCertificationsRoutingModule,
  routedComponents,
} from 'src/app/professional-certifications/professional-certifications-routing.module';
import { ProfessionalCertificationsListFilterComponent } from 'src/app/professional-certifications/list/filter/professional-certifications-list-filter.component';
import { ProfessionalCertificationsListTableComponent } from 'src/app/professional-certifications/list/table/professional-certifications-list-table.component';
import { ProfessionalCertificationsListToolbarComponent } from 'src/app/professional-certifications/list/toolbar/professional-certifications-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessionalCertificationsViewToolbarComponent } from 'src/app/professional-certifications/view/professional-certifications-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ProfessionalCertificationsImporterService } from 'src/app/professional-certifications/importer/professional-certifications-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ProfessionalCertificationsListFilterComponent,
    ProfessionalCertificationsListTableComponent,
    ProfessionalCertificationsListToolbarComponent,
    ProfessionalCertificationsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ProfessionalCertificationsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ProfessionalCertificationsImporterService,
    },
  ],
})
export class ProfessionalCertificationsModule {}
