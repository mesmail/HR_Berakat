import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { UserEditFormComponent } from 'src/app/user/form/user-edit-form.component';
import { UserImporterComponent } from 'src/app/user/importer/user-importer.component';
import { UserListComponent } from 'src/app/user/list/user-list.component';
import { UserViewComponent } from 'src/app/user/view/user-view.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { Permissions } from 'src/security/permissions';
import { UserNewFormPageComponent } from 'src/app/user/form/user-new-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: UserEditFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.userEdit,
        },
      },
      {
        path: 'new',
        component: UserNewFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.userCreate,
        },
      },
      {
        path: 'import',
        component: UserImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.userImport,
        },
      },
      {
        path: ':id',
        component: UserViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.userRead,
        },
      },
      {
        path: '',
        component: UserListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.userRead,
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
export class UserRoutingModule {}

export const routedComponents = [
  UserListComponent,
  UserNewFormPageComponent,
  UserEditFormComponent,
  UserViewComponent,
  UserImporterComponent,
];
