import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { JobsListComponent } from 'src/app/jobs/list/jobs-list.component';
import { JobsViewComponent } from 'src/app/jobs/view/jobs-view.component';
import { JobsImporterComponent } from 'src/app/jobs/importer/jobs-importer.component';
import { JobsFormPageComponent } from 'src/app/jobs/form/jobs-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: JobsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobsEdit,
        },
      },
      {
        path: 'new',
        component: JobsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobsCreate,
        },
      },
      {
        path: 'import',
        component: JobsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobsImport,
        },
      },
      {
        path: ':id',
        component: JobsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobsRead,
        },
      },
      {
        path: '',
        component: JobsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobsRead,
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
export class JobsRoutingModule {}

export const routedComponents = [
  JobsListComponent,
  JobsFormPageComponent,
  JobsViewComponent,
  JobsImporterComponent,
];
