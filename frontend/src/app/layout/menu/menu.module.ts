import { NgModule } from '@angular/core';
import { MenuUserComponent } from 'src/app/layout/menu/menu-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from 'src/app/layout/menu/menu.component';

@NgModule({
  declarations: [MenuUserComponent, MenuComponent],
  imports: [SharedModule],
  exports: [MenuUserComponent, MenuComponent],
  providers: [],
})
export class MenuModule {}
