import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  SoftSkillsRoutingModule,
  routedComponents,
} from 'src/app/soft-skills/soft-skills-routing.module';
import { SoftSkillsListFilterComponent } from 'src/app/soft-skills/list/filter/soft-skills-list-filter.component';
import { SoftSkillsListTableComponent } from 'src/app/soft-skills/list/table/soft-skills-list-table.component';
import { SoftSkillsListToolbarComponent } from 'src/app/soft-skills/list/toolbar/soft-skills-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SoftSkillsViewToolbarComponent } from 'src/app/soft-skills/view/soft-skills-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { SoftSkillsImporterService } from 'src/app/soft-skills/importer/soft-skills-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    SoftSkillsListFilterComponent,
    SoftSkillsListTableComponent,
    SoftSkillsListToolbarComponent,
    SoftSkillsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    SoftSkillsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: SoftSkillsImporterService,
    },
  ],
})
export class SoftSkillsModule {}
