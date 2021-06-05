import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ClaimListComponent } from 'src/app/claim/list/claim-list.component';
import { ClaimViewComponent } from 'src/app/claim/view/claim-view.component';
import { ClaimImporterComponent } from 'src/app/claim/importer/claim-importer.component';
import { ClaimFormPageComponent } from 'src/app/claim/form/claim-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ClaimFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.claimEdit,
        },
      },
      {
        path: 'new',
        component: ClaimFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.claimCreate,
        },
      },
      {
        path: 'import',
        component: ClaimImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.claimImport,
        },
      },
      {
        path: ':id',
        component: ClaimViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.claimRead,
        },
      },
      {
        path: '',
        component: ClaimListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.claimRead,
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
export class ClaimRoutingModule {}

export const routedComponents = [
  ClaimListComponent,
  ClaimFormPageComponent,
  ClaimViewComponent,
  ClaimImporterComponent,
];
