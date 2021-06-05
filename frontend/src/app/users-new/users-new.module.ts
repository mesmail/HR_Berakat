import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  UsersNewRoutingModule,
  routedComponents,
} from 'src/app/users-new/users-new-routing.module';
import { UsersNewListFilterComponent } from 'src/app/users-new/list/filter/users-new-list-filter.component';
import { UsersNewListTableComponent } from 'src/app/users-new/list/table/users-new-list-table.component';
import { UsersNewListToolbarComponent } from 'src/app/users-new/list/toolbar/users-new-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersNewViewToolbarComponent } from 'src/app/users-new/view/users-new-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { UsersNewImporterService } from 'src/app/users-new/importer/users-new-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    UsersNewListFilterComponent,
    UsersNewListTableComponent,
    UsersNewListToolbarComponent,
    UsersNewViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    UsersNewRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: UsersNewImporterService,
    },
  ],
})
export class UsersNewModule {}
