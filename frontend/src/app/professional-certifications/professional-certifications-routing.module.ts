import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ProfessionalCertificationsListComponent } from 'src/app/professional-certifications/list/professional-certifications-list.component';
import { ProfessionalCertificationsViewComponent } from 'src/app/professional-certifications/view/professional-certifications-view.component';
import { ProfessionalCertificationsImporterComponent } from 'src/app/professional-certifications/importer/professional-certifications-importer.component';
import { ProfessionalCertificationsFormPageComponent } from 'src/app/professional-certifications/form/professional-certifications-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ProfessionalCertificationsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.professionalCertificationsEdit,
        },
      },
      {
        path: 'new',
        component: ProfessionalCertificationsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.professionalCertificationsCreate,
        },
      },
      {
        path: 'import',
        component: ProfessionalCertificationsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.professionalCertificationsImport,
        },
      },
      {
        path: ':id',
        component: ProfessionalCertificationsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.professionalCertificationsRead,
        },
      },
      {
        path: '',
        component: ProfessionalCertificationsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.professionalCertificationsRead,
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
export class ProfessionalCertificationsRoutingModule {}

export const routedComponents = [
  ProfessionalCertificationsListComponent,
  ProfessionalCertificationsFormPageComponent,
  ProfessionalCertificationsViewComponent,
  ProfessionalCertificationsImporterComponent,
];
