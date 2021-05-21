import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { UsersNewListComponent } from 'src/app/users-new/list/users-new-list.component';
import { UsersNewViewComponent } from 'src/app/users-new/view/users-new-view.component';
import { UsersNewImporterComponent } from 'src/app/users-new/importer/users-new-importer.component';
import { UsersNewFormPageComponent } from 'src/app/users-new/form/users-new-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: UsersNewFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.usersNewEdit,
        },
      },
      {
        path: 'new',
        component: UsersNewFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.usersNewCreate,
        },
      },
      {
        path: 'import',
        component: UsersNewImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.usersNewImport,
        },
      },
      {
        path: ':id',
        component: UsersNewViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.usersNewRead,
        },
      },
      {
        path: '',
        component: UsersNewListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.usersNewRead,
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
export class UsersNewRoutingModule {}

export const routedComponents = [
  UsersNewListComponent,
  UsersNewFormPageComponent,
  UsersNewViewComponent,
  UsersNewImporterComponent,
];
