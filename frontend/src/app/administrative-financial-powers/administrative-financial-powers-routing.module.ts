import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { AdministrativeFinancialPowersListComponent } from 'src/app/administrative-financial-powers/list/administrative-financial-powers-list.component';
import { AdministrativeFinancialPowersViewComponent } from 'src/app/administrative-financial-powers/view/administrative-financial-powers-view.component';
import { AdministrativeFinancialPowersImporterComponent } from 'src/app/administrative-financial-powers/importer/administrative-financial-powers-importer.component';
import { AdministrativeFinancialPowersFormPageComponent } from 'src/app/administrative-financial-powers/form/administrative-financial-powers-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: AdministrativeFinancialPowersFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.administrativeFinancialPowersEdit,
        },
      },
      {
        path: 'new',
        component: AdministrativeFinancialPowersFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.administrativeFinancialPowersCreate,
        },
      },
      {
        path: 'import',
        component: AdministrativeFinancialPowersImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.administrativeFinancialPowersImport,
        },
      },
      {
        path: ':id',
        component: AdministrativeFinancialPowersViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.administrativeFinancialPowersRead,
        },
      },
      {
        path: '',
        component: AdministrativeFinancialPowersListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.administrativeFinancialPowersRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdministrativeFinancialPowersRoutingModule {}

export const routedComponents = [
  AdministrativeFinancialPowersListComponent,
  AdministrativeFinancialPowersFormPageComponent,
  AdministrativeFinancialPowersViewComponent,
  AdministrativeFinancialPowersImporterComponent,
];
