import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, MaterialModule, I18nModule],
  exports: [],
  providers: [ConfirmService],
  entryComponents: [ConfirmComponent],
})
export class ConfirmModule {}
