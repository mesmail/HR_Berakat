import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { DepartmentsListComponent } from 'src/app/departments/list/departments-list.component';
import { DepartmentsViewComponent } from 'src/app/departments/view/departments-view.component';
import { DepartmentsImporterComponent } from 'src/app/departments/importer/departments-importer.component';
import { DepartmentsFormPageComponent } from 'src/app/departments/form/departments-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: DepartmentsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentsEdit,
        },
      },
      {
        path: 'new',
        component: DepartmentsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentsCreate,
        },
      },
      {
        path: 'import',
        component: DepartmentsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentsImport,
        },
      },
      {
        path: ':id',
        component: DepartmentsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentsRead,
        },
      },
      {
        path: '',
        component: DepartmentsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentsRead,
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
export class DepartmentsRoutingModule {}

export const routedComponents = [
  DepartmentsListComponent,
  DepartmentsFormPageComponent,
  DepartmentsViewComponent,
  DepartmentsImporterComponent,
];
