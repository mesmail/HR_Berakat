import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TasksDutiesListComponent } from 'src/app/tasks-duties/list/tasks-duties-list.component';
import { TasksDutiesViewComponent } from 'src/app/tasks-duties/view/tasks-duties-view.component';
import { TasksDutiesImporterComponent } from 'src/app/tasks-duties/importer/tasks-duties-importer.component';
import { TasksDutiesFormPageComponent } from 'src/app/tasks-duties/form/tasks-duties-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TasksDutiesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tasksDutiesEdit,
        },
      },
      {
        path: 'new',
        component: TasksDutiesFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tasksDutiesCreate,
        },
      },
      {
        path: 'import',
        component: TasksDutiesImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tasksDutiesImport,
        },
      },
      {
        path: ':id',
        component: TasksDutiesViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tasksDutiesRead,
        },
      },
      {
        path: '',
        component: TasksDutiesListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tasksDutiesRead,
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
export class TasksDutiesRoutingModule {}

export const routedComponents = [
  TasksDutiesListComponent,
  TasksDutiesFormPageComponent,
  TasksDutiesViewComponent,
  TasksDutiesImporterComponent,
];
