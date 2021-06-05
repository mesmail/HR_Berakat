import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ClientsListComponent } from 'src/app/clients/list/clients-list.component';
import { ClientsViewComponent } from 'src/app/clients/view/clients-view.component';
import { ClientsImporterComponent } from 'src/app/clients/importer/clients-importer.component';
import { ClientsFormPageComponent } from 'src/app/clients/form/clients-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ClientsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientsEdit,
        },
      },
      {
        path: 'new',
        component: ClientsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientsCreate,
        },
      },
      {
        path: 'import',
        component: ClientsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientsImport,
        },
      },
      {
        path: ':id',
        component: ClientsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientsRead,
        },
      },
      {
        path: '',
        component: ClientsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientsRead,
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
export class ClientsRoutingModule {}

export const routedComponents = [
  ClientsListComponent,
  ClientsFormPageComponent,
  ClientsViewComponent,
  ClientsImporterComponent,
];
