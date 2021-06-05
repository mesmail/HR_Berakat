import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TrainingCertificatesListComponent } from 'src/app/training-certificates/list/training-certificates-list.component';
import { TrainingCertificatesViewComponent } from 'src/app/training-certificates/view/training-certificates-view.component';
import { TrainingCertificatesImporterComponent } from 'src/app/training-certificates/importer/training-certificates-importer.component';
import { TrainingCertificatesFormPageComponent } from 'src/app/training-certificates/form/training-certificates-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TrainingCertificatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.trainingCertificatesEdit,
        },
      },
      {
        path: 'new',
        component: TrainingCertificatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.trainingCertificatesCreate,
        },
      },
      {
        path: 'import',
        component: TrainingCertificatesImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.trainingCertificatesImport,
        },
      },
      {
        path: ':id',
        component: TrainingCertificatesViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.trainingCertificatesRead,
        },
      },
      {
        path: '',
        component: TrainingCertificatesListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.trainingCertificatesRead,
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
export class TrainingCertificatesRoutingModule {}

export const routedComponents = [
  TrainingCertificatesListComponent,
  TrainingCertificatesFormPageComponent,
  TrainingCertificatesViewComponent,
  TrainingCertificatesImporterComponent,
];
