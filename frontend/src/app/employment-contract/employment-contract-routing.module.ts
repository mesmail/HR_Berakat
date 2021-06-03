import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { EmploymentContractListComponent } from 'src/app/employment-contract/list/employment-contract-list.component';
import { EmploymentContractViewComponent } from 'src/app/employment-contract/view/employment-contract-view.component';
import { EmploymentContractImporterComponent } from 'src/app/employment-contract/importer/employment-contract-importer.component';
import { EmploymentContractFormPageComponent } from 'src/app/employment-contract/form/employment-contract-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: EmploymentContractFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.employmentContractEdit,
        },
      },
      {
        path: 'new',
        component: EmploymentContractFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.employmentContractCreate,
        },
      },
      {
        path: 'import',
        component: EmploymentContractImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.employmentContractImport,
        },
      },
      {
        path: ':id',
        component: EmploymentContractViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.employmentContractRead,
        },
      },
      {
        path: '',
        component: EmploymentContractListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.employmentContractRead,
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
export class EmploymentContractRoutingModule {}

export const routedComponents = [
  EmploymentContractListComponent,
  EmploymentContractFormPageComponent,
  EmploymentContractViewComponent,
  EmploymentContractImporterComponent,
];
