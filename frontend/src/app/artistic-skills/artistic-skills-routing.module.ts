import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ArtisticSkillsListComponent } from 'src/app/artistic-skills/list/artistic-skills-list.component';
import { ArtisticSkillsViewComponent } from 'src/app/artistic-skills/view/artistic-skills-view.component';
import { ArtisticSkillsImporterComponent } from 'src/app/artistic-skills/importer/artistic-skills-importer.component';
import { ArtisticSkillsFormPageComponent } from 'src/app/artistic-skills/form/artistic-skills-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ArtisticSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.artisticSkillsEdit,
        },
      },
      {
        path: 'new',
        component: ArtisticSkillsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.artisticSkillsCreate,
        },
      },
      {
        path: 'import',
        component: ArtisticSkillsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.artisticSkillsImport,
        },
      },
      {
        path: ':id',
        component: ArtisticSkillsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.artisticSkillsRead,
        },
      },
      {
        path: '',
        component: ArtisticSkillsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.artisticSkillsRead,
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
export class ArtisticSkillsRoutingModule {}

export const routedComponents = [
  ArtisticSkillsListComponent,
  ArtisticSkillsFormPageComponent,
  ArtisticSkillsViewComponent,
  ArtisticSkillsImporterComponent,
];
