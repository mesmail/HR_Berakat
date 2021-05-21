import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { SoftSkillsListComponent } from 'src/app/soft-skills/list/soft-skills-list.component';
import { SoftSkillsViewComponent } from 'src/app/soft-skills/view/soft-skills-view.component';
import { SoftSkillsImporterComponent } from 'src/app/soft-skills/importer/soft-skills-importer.component';
import { SoftSkillsFormPageComponent } from 'src/app/soft-skills/form/soft-skills-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: SoftSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.softSkillsEdit,
        },
      },
      {
        path: 'new',
        component: SoftSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.softSkillsCreate,
        },
      },
      {
        path: 'import',
        component: SoftSkillsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.softSkillsImport,
        },
      },
      {
        path: ':id',
        component: SoftSkillsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.softSkillsRead,
        },
      },
      {
        path: '',
        component: SoftSkillsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.softSkillsRead,
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
export class SoftSkillsRoutingModule {}

export const routedComponents = [
  SoftSkillsListComponent,
  SoftSkillsFormPageComponent,
  SoftSkillsViewComponent,
  SoftSkillsImporterComponent,
];
