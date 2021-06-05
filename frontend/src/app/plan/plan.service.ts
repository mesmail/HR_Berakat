import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';
import { PermissionChecker } from 'src/app/auth/permission-checker';
import { ErrorService } from 'src/app/shared/error/error.service';
import { environment } from 'src/environments/environment';
import { Plans } from 'src/security/plans';
import { PlanApi } from 'src/app/plan/plan.api';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  loading = false;

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
  ) {}

  get isPlanUser() {
    const currentUser = this.authService.currentUser;
    const currentTenant = this.authService.currentTenant;

    if (!currentUser || !currentTenant) {
      return false;
    }

    if (
      currentTenant.plan !== Plans.values.free &&
      currentTenant.planStatus !== 'cancel_at_period_end' &&
      currentTenant.planUserId !== currentUser.id
    ) {
      return false;
    }

    return true;
  }

  get lockedForCurrentPlan() {
    return (
      environment.isPlanEnabled &&
      new PermissionChecker(
        this.authService.currentTenant,
        this.authService.currentUser,
      ).lockedForCurrentPlan(Permissions.values.planRead)
    );
  }

  get hasPermissionToRead() {
    return (
      environment.isPlanEnabled &&
      new PermissionChecker(
        this.authService.currentTenant,
        this.authService.currentUser,
      ).match(Permissions.values.planRead)
    );
  }

  get hasPermissionToEdit() {
    return new PermissionChecker(
      this.authService.currentTenant,
      this.authService.currentUser,
    ).match(Permissions.values.planEdit);
  }

  async doCheckout(plan) {
    try {
      this.loading = true;

      const sessionId = await PlanApi.fetchCheckoutSessionId(
        plan,
      );

      const stripe = (window as any).Stripe(
        environment.stripePublishableKey,
      );
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error.message) {
        throw new Error(result.error.message);
      }

      this.loading = false;
    } catch (error) {
      this.errorService.showMessage(error);
      this.loading = false;
    }
  }

  async doPortal() {
    try {
      this.loading = true;

      const url = await PlanApi.fetchPortalUrl();
      window.location.href = url;

      this.loading = false;
    } catch (error) {
      this.errorService.showMessage(error);
      this.loading = false;
    }
  }
}
