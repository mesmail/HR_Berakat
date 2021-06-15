import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ConnectionLevelListComponent } from 'src/app/connection-level/list/connection-level-list.component';
import { ConnectionLevelViewComponent } from 'src/app/connection-level/view/connection-level-view.component';
import { ConnectionLevelImporterComponent } from 'src/app/connection-level/importer/connection-level-importer.component';
import { ConnectionLevelFormPageComponent } from 'src/app/connection-level/form/connection-level-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ConnectionLevelFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.connectionLevelEdit,
        },
      },
      {
        path: 'new',
        component: ConnectionLevelFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.connectionLevelCreate,
        },
      },
      {
        path: 'import',
        component: ConnectionLevelImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.connectionLevelImport,
        },
      },
      {
        path: ':id',
        component: ConnectionLevelViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.connectionLevelRead,
        },
      },
      {
        path: '',
        component: ConnectionLevelListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.connectionLevelRead,
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
export class ConnectionLevelRoutingModule {}

export const routedComponents = [
  ConnectionLevelListComponent,
  ConnectionLevelFormPageComponent,
  ConnectionLevelViewComponent,
  ConnectionLevelImporterComponent,
];
