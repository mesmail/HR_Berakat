import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CommonComiteesListComponent } from 'src/app/common-comitees/list/common-comitees-list.component';
import { CommonComiteesViewComponent } from 'src/app/common-comitees/view/common-comitees-view.component';
import { CommonComiteesImporterComponent } from 'src/app/common-comitees/importer/common-comitees-importer.component';
import { CommonComiteesFormPageComponent } from 'src/app/common-comitees/form/common-comitees-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CommonComiteesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.commonComiteesEdit,
        },
      },
      {
        path: 'new',
        component: CommonComiteesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.commonComiteesCreate,
        },
      },
      {
        path: 'import',
        component: CommonComiteesImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.commonComiteesImport,
        },
      },
      {
        path: ':id',
        component: CommonComiteesViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.commonComiteesRead,
        },
      },
      {
        path: '',
        component: CommonComiteesListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.commonComiteesRead,
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
export class CommonComiteesRoutingModule {}

export const routedComponents = [
  CommonComiteesListComponent,
  CommonComiteesFormPageComponent,
  CommonComiteesViewComponent,
  CommonComiteesImporterComponent,
];
