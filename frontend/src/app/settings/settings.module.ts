import { NgModule } from '@angular/core';
import {
  SettingsRoutingModule,
  routedComponents,
} from 'src/app/settings/settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SettingsToolbarComponent } from 'src/app/settings/toolbar/settings-toolbar.component';

@NgModule({
  declarations: [
    ...routedComponents,
    SettingsToolbarComponent,
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule,
    LayoutModule,
  ],
  exports: [],
  providers: [],
})
export class SettingsModule {}
