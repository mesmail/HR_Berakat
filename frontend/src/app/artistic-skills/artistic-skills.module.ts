import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ArtisticSkillsRoutingModule,
  routedComponents,
} from 'src/app/artistic-skills/artistic-skills-routing.module';
import { ArtisticSkillsListFilterComponent } from 'src/app/artistic-skills/list/filter/artistic-skills-list-filter.component';
import { ArtisticSkillsListTableComponent } from 'src/app/artistic-skills/list/table/artistic-skills-list-table.component';
import { ArtisticSkillsListToolbarComponent } from 'src/app/artistic-skills/list/toolbar/artistic-skills-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtisticSkillsViewToolbarComponent } from 'src/app/artistic-skills/view/artistic-skills-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ArtisticSkillsImporterService } from 'src/app/artistic-skills/importer/artistic-skills-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ArtisticSkillsListFilterComponent,
    ArtisticSkillsListTableComponent,
    ArtisticSkillsListToolbarComponent,
    ArtisticSkillsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ArtisticSkillsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ArtisticSkillsImporterService,
    },
  ],
})
export class ArtisticSkillsModule {}
