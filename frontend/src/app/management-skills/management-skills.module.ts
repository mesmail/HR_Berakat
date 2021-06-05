import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ManagementSkillsRoutingModule,
  routedComponents,
} from 'src/app/management-skills/management-skills-routing.module';
import { ManagementSkillsListFilterComponent } from 'src/app/management-skills/list/filter/management-skills-list-filter.component';
import { ManagementSkillsListTableComponent } from 'src/app/management-skills/list/table/management-skills-list-table.component';
import { ManagementSkillsListToolbarComponent } from 'src/app/management-skills/list/toolbar/management-skills-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagementSkillsViewToolbarComponent } from 'src/app/management-skills/view/management-skills-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ManagementSkillsImporterService } from 'src/app/management-skills/importer/management-skills-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ManagementSkillsListFilterComponent,
    ManagementSkillsListTableComponent,
    ManagementSkillsListToolbarComponent,
    ManagementSkillsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ManagementSkillsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ManagementSkillsImporterService,
    },
  ],
})
export class ManagementSkillsModule {}
