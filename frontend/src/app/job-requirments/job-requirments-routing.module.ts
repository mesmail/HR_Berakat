import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { JobRequirmentsListComponent } from 'src/app/job-requirments/list/job-requirments-list.component';
import { JobRequirmentsViewComponent } from 'src/app/job-requirments/view/job-requirments-view.component';
import { JobRequirmentsImporterComponent } from 'src/app/job-requirments/importer/job-requirments-importer.component';
import { JobRequirmentsFormPageComponent } from 'src/app/job-requirments/form/job-requirments-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: JobRequirmentsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobRequirmentsEdit,
        },
      },
      {
        path: 'new',
        component: JobRequirmentsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobRequirmentsCreate,
        },
      },
      {
        path: 'import',
        component: JobRequirmentsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobRequirmentsImport,
        },
      },
      {
        path: ':id',
        component: JobRequirmentsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobRequirmentsRead,
        },
      },
      {
        path: '',
        component: JobRequirmentsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobRequirmentsRead,
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
export class JobRequirmentsRoutingModule {}

export const routedComponents = [
  JobRequirmentsListComponent,
  JobRequirmentsFormPageComponent,
  JobRequirmentsViewComponent,
  JobRequirmentsImporterComponent,
];
