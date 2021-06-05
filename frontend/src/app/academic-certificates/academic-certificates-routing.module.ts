import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { AcademicCertificatesListComponent } from 'src/app/academic-certificates/list/academic-certificates-list.component';
import { AcademicCertificatesViewComponent } from 'src/app/academic-certificates/view/academic-certificates-view.component';
import { AcademicCertificatesImporterComponent } from 'src/app/academic-certificates/importer/academic-certificates-importer.component';
import { AcademicCertificatesFormPageComponent } from 'src/app/academic-certificates/form/academic-certificates-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: AcademicCertificatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.academicCertificatesEdit,
        },
      },
      {
        path: 'new',
        component: AcademicCertificatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.academicCertificatesCreate,
        },
      },
      {
        path: 'import',
        component: AcademicCertificatesImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.academicCertificatesImport,
        },
      },
      {
        path: ':id',
        component: AcademicCertificatesViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.academicCertificatesRead,
        },
      },
      {
        path: '',
        component: AcademicCertificatesListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.academicCertificatesRead,
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
export class AcademicCertificatesRoutingModule {}

export const routedComponents = [
  AcademicCertificatesListComponent,
  AcademicCertificatesFormPageComponent,
  AcademicCertificatesViewComponent,
  AcademicCertificatesImporterComponent,
];
