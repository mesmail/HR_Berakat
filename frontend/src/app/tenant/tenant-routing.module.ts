import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { TenantListComponent } from 'src/app/tenant/list/tenant-list.component';
import { TenantFormPageComponent } from 'src/app/tenant/form/tenant-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TenantFormPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'new',
        component: TenantFormPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: TenantListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TenantRoutingModule {}

export const routedComponents = [
  TenantListComponent,
  TenantFormPageComponent,
];
