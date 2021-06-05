import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ImporterFormComponent } from 'src/app/shared/importer/components/importer-form.component';
import { ImporterListComponent } from 'src/app/shared/importer/components/importer-list.component';
import { ImporterRowStatusComponent } from 'src/app/shared/importer/components/importer-row-status.component';
import { ImporterStatusComponent } from 'src/app/shared/importer/components/importer-status.component';
import { ImporterToolbarComponent } from 'src/app/shared/importer/components/importer-toolbar.component';
import { ImporterComponent } from 'src/app/shared/importer/components/importer.component';
import { ConfirmModule } from 'src/app/shared/confirm/confirm.module';

@NgModule({
  declarations: [
    ImporterFormComponent,
    ImporterListComponent,
    ImporterRowStatusComponent,
    ImporterStatusComponent,
    ImporterToolbarComponent,
    ImporterComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmModule,
  ],
  exports: [ImporterComponent],
  providers: [],
})
export class ImporterModule {}
