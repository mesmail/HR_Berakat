import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CardInformationListComponent } from 'src/app/card-information/list/card-information-list.component';
import { CardInformationViewComponent } from 'src/app/card-information/view/card-information-view.component';
import { CardInformationImporterComponent } from 'src/app/card-information/importer/card-information-importer.component';
import { CardInformationFormPageComponent } from 'src/app/card-information/form/card-information-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CardInformationFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cardInformationEdit,
        },
      },
      {
        path: 'new',
        component: CardInformationFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cardInformationCreate,
        },
      },
      {
        path: 'import',
        component: CardInformationImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cardInformationImport,
        },
      },
      {
        path: ':id',
        component: CardInformationViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cardInformationRead,
        },
      },
      {
        path: '',
        component: CardInformationListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cardInformationRead,
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
export class CardInformationRoutingModule {}

export const routedComponents = [
  CardInformationListComponent,
  CardInformationFormPageComponent,
  CardInformationViewComponent,
  CardInformationImporterComponent,
];
