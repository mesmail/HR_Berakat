import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  UserRoutingModule,
  routedComponents,
} from 'src/app/user/user-routing.module';
import { UserListFilterComponent } from 'src/app/user/list/filter/user-list-filter.component';
import { UserListTableComponent } from 'src/app/user/list/table/user-list-table.component';
import { UserListToolbarComponent } from 'src/app/user/list/toolbar/user-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserViewToolbarComponent } from 'src/app/user/view/user-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { UserImporterService } from 'src/app/user/importer/user-importer.service';
import { AppFormAutocompleteModule } from '../app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    UserListFilterComponent,
    UserListTableComponent,
    UserListToolbarComponent,
    UserViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: UserImporterService,
    },
  ],
})
export class UserModule {}
