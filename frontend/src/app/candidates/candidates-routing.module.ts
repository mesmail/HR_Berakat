import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CandidatesListComponent } from 'src/app/candidates/list/candidates-list.component';
import { CandidatesViewComponent } from 'src/app/candidates/view/candidates-view.component';
import { CandidatesImporterComponent } from 'src/app/candidates/importer/candidates-importer.component';
import { CandidatesFormPageComponent } from 'src/app/candidates/form/candidates-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CandidatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.candidatesEdit,
        },
      },
      {
        path: 'new',
        component: CandidatesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.candidatesCreate,
        },
      },
      {
        path: 'import',
        component: CandidatesImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.candidatesImport,
        },
      },
      {
        path: ':id',
        component: CandidatesViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.candidatesRead,
        },
      },
      {
        path: '',
        component: CandidatesListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.candidatesRead,
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
export class CandidatesRoutingModule {}

export const routedComponents = [
  CandidatesListComponent,
  CandidatesFormPageComponent,
  CandidatesViewComponent,
  CandidatesImporterComponent,
];
