import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { JobPathListComponent } from 'src/app/job-path/list/job-path-list.component';
import { JobPathViewComponent } from 'src/app/job-path/view/job-path-view.component';
import { JobPathImporterComponent } from 'src/app/job-path/importer/job-path-importer.component';
import { JobPathFormPageComponent } from 'src/app/job-path/form/job-path-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: JobPathFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobPathEdit,
        },
      },
      {
        path: 'new',
        component: JobPathFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobPathCreate,
        },
      },
      {
        path: 'import',
        component: JobPathImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobPathImport,
        },
      },
      {
        path: ':id',
        component: JobPathViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobPathRead,
        },
      },
      {
        path: '',
        component: JobPathListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobPathRead,
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
export class JobPathRoutingModule {}

export const routedComponents = [
  JobPathListComponent,
  JobPathFormPageComponent,
  JobPathViewComponent,
  JobPathImporterComponent,
];
