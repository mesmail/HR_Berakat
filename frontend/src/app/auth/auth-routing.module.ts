import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { UnauthGuard } from 'src/app/auth/unauth.guard';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/auth/forgot-password/forgot-password.component';
import { TenantComponent } from 'src/app/auth/tenant/tenant.component';
import { EmptyPermissionsComponent } from 'src/app/auth/empty-permissions/empty-permissions.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { NotEmptyTenantGuard } from 'src/app/auth/tenant/not-empty-tenant.guard';
import { NotEmptyPermissionsGuard } from 'src/app/auth/empty-permissions/not-empty-permissions.guard';
import { EmailAlreadyVerifiedGuard } from 'src/app/auth/email-unverified/email-already-verified.guard';
import { EmailUnverifiedComponent } from 'src/app/auth/email-unverified/email-unverified.component';
import { EditProfileComponent } from 'src/app/auth/edit-profile/edit-profile.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { VerifyEmailComponent } from 'src/app/auth/verify-email/verify-email.component';
import { PasswordResetComponent } from 'src/app/auth/password-reset/password-reset.component';
import { InvitationComponent } from 'src/app/auth/invitation/invitation.component';
import { PasswordChangeComponent } from 'src/app/auth/password-change/password-change.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'tenant',
        component: TenantComponent,
        canActivate: [AuthGuard, NotEmptyTenantGuard],
      },
      {
        path: 'empty-permissions',
        component: EmptyPermissionsComponent,
        canActivate: [AuthGuard, NotEmptyPermissionsGuard],
      },
      {
        path: 'email-unverified',
        component: EmailUnverifiedComponent,
        canActivate: [AuthGuard, EmailAlreadyVerifiedGuard],
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
      },
      {
        path: 'invitation',
        component: InvitationComponent,
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent,
      },
      {
        path: 'profile',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: EditProfileComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'password-change',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: PasswordChangeComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}

export const routedComponents = [
  SigninComponent,
  SignupComponent,
  ForgotPasswordComponent,
  TenantComponent,
  EmailUnverifiedComponent,
  EmptyPermissionsComponent,
  EditProfileComponent,
  VerifyEmailComponent,
  PasswordResetComponent,
  PasswordChangeComponent,
  InvitationComponent,
];
