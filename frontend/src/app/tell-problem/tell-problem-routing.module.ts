import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TellProblemListComponent } from 'src/app/tell-problem/list/tell-problem-list.component';
import { TellProblemViewComponent } from 'src/app/tell-problem/view/tell-problem-view.component';
import { TellProblemImporterComponent } from 'src/app/tell-problem/importer/tell-problem-importer.component';
import { TellProblemFormPageComponent } from 'src/app/tell-problem/form/tell-problem-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TellProblemFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tellProblemEdit,
        },
      },
      {
        path: 'new',
        component: TellProblemFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tellProblemCreate,
        },
      },
      {
        path: 'import',
        component: TellProblemImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tellProblemImport,
        },
      },
      {
        path: ':id',
        component: TellProblemViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tellProblemRead,
        },
      },
      {
        path: '',
        component: TellProblemListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tellProblemRead,
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
export class TellProblemRoutingModule {}

export const routedComponents = [
  TellProblemListComponent,
  TellProblemFormPageComponent,
  TellProblemViewComponent,
  TellProblemImporterComponent,
];
