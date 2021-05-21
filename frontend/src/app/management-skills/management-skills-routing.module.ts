import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ManagementSkillsListComponent } from 'src/app/management-skills/list/management-skills-list.component';
import { ManagementSkillsViewComponent } from 'src/app/management-skills/view/management-skills-view.component';
import { ManagementSkillsImporterComponent } from 'src/app/management-skills/importer/management-skills-importer.component';
import { ManagementSkillsFormPageComponent } from 'src/app/management-skills/form/management-skills-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ManagementSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managementSkillsEdit,
        },
      },
      {
        path: 'new',
        component: ManagementSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managementSkillsCreate,
        },
      },
      {
        path: 'import',
        component: ManagementSkillsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managementSkillsImport,
        },
      },
      {
        path: ':id',
        component: ManagementSkillsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managementSkillsRead,
        },
      },
      {
        path: '',
        component: ManagementSkillsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managementSkillsRead,
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
export class ManagementSkillsRoutingModule {}

export const routedComponents = [
  ManagementSkillsListComponent,
  ManagementSkillsFormPageComponent,
  ManagementSkillsViewComponent,
  ManagementSkillsImporterComponent,
];
