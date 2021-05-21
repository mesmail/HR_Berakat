import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { JobFrameworksListComponent } from 'src/app/job-frameworks/list/job-frameworks-list.component';
import { JobFrameworksViewComponent } from 'src/app/job-frameworks/view/job-frameworks-view.component';
import { JobFrameworksImporterComponent } from 'src/app/job-frameworks/importer/job-frameworks-importer.component';
import { JobFrameworksFormPageComponent } from 'src/app/job-frameworks/form/job-frameworks-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: JobFrameworksFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobFrameworksEdit,
        },
      },
      {
        path: 'new',
        component: JobFrameworksFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobFrameworksCreate,
        },
      },
      {
        path: 'import',
        component: JobFrameworksImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobFrameworksImport,
        },
      },
      {
        path: ':id',
        component: JobFrameworksViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobFrameworksRead,
        },
      },
      {
        path: '',
        component: JobFrameworksListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobFrameworksRead,
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
export class JobFrameworksRoutingModule {}

export const routedComponents = [
  JobFrameworksListComponent,
  JobFrameworksFormPageComponent,
  JobFrameworksViewComponent,
  JobFrameworksImporterComponent,
];
