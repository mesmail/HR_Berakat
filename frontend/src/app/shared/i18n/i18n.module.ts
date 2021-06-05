import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nFlagsComponent } from 'src/app/shared/i18n/flags/i18n-flags.component';
import { I18nComponent } from 'src/app/shared/i18n/i18n.component';
import { I18nSelectComponent } from 'src/app/shared/i18n/select/i18n-select.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    I18nComponent,
    I18nFlagsComponent,
    I18nSelectComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    I18nComponent,
    I18nFlagsComponent,
    I18nSelectComponent,
  ],
  providers: [],
})
export class I18nModule {}
