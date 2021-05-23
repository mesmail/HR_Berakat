import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { LeaveApplicationFormListComponent } from 'src/app/leave-application-form/list/leave-application-form-list.component';
import { LeaveApplicationFormViewComponent } from 'src/app/leave-application-form/view/leave-application-form-view.component';
import { LeaveApplicationFormImporterComponent } from 'src/app/leave-application-form/importer/leave-application-form-importer.component';
import { LeaveApplicationFormFormPageComponent } from 'src/app/leave-application-form/form/leave-application-form-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: LeaveApplicationFormFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.leaveApplicationFormEdit,
        },
      },
      {
        path: 'new',
        component: LeaveApplicationFormFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.leaveApplicationFormCreate,
        },
      },
      {
        path: 'import',
        component: LeaveApplicationFormImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.leaveApplicationFormImport,
        },
      },
      {
        path: ':id',
        component: LeaveApplicationFormViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.leaveApplicationFormRead,
        },
      },
      {
        path: '',
        component: LeaveApplicationFormListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.leaveApplicationFormRead,
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
export class LeaveApplicationFormRoutingModule {}

export const routedComponents = [
  LeaveApplicationFormListComponent,
  LeaveApplicationFormFormPageComponent,
  LeaveApplicationFormViewComponent,
  LeaveApplicationFormImporterComponent,
];
