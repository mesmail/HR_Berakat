import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { AdvancedPaymentListComponent } from 'src/app/advanced-payment/list/advanced-payment-list.component';
import { AdvancedPaymentViewComponent } from 'src/app/advanced-payment/view/advanced-payment-view.component';
import { AdvancedPaymentImporterComponent } from 'src/app/advanced-payment/importer/advanced-payment-importer.component';
import { AdvancedPaymentFormPageComponent } from 'src/app/advanced-payment/form/advanced-payment-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: AdvancedPaymentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.advancedPaymentEdit,
        },
      },
      {
        path: 'new',
        component: AdvancedPaymentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.advancedPaymentCreate,
        },
      },
      {
        path: 'import',
        component: AdvancedPaymentImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.advancedPaymentImport,
        },
      },
      {
        path: ':id',
        component: AdvancedPaymentViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.advancedPaymentRead,
        },
      },
      {
        path: '',
        component: AdvancedPaymentListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.advancedPaymentRead,
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
export class AdvancedPaymentRoutingModule {}

export const routedComponents = [
  AdvancedPaymentListComponent,
  AdvancedPaymentFormPageComponent,
  AdvancedPaymentViewComponent,
  AdvancedPaymentImporterComponent,
];
