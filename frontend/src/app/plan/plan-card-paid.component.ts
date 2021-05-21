import { Component, Input } from '@angular/core';
import { i18n } from 'src/i18n';
import { Plans } from 'src/security/plans';
import { AuthService } from 'src/app/auth/auth.service';
import { PlanService } from 'src/app/plan/plan.service';

@Component({
  selector: 'app-plan-card-paid',
  templateUrl: './plan-card-paid.component.html',
})
export class PlanCardPaidComponent {
  @Input() plan: String;

  constructor(
    private authService: AuthService,
    private planService: PlanService,
  ) {}

  get loading() {
    return this.planService.loading;
  }

  get currentTenant() {
    return this.authService.currentTenant;
  }

  get hasPermissionToEdit() {
    return this.planService.hasPermissionToEdit;
  }

  get isPlanUser() {
    return this.planService.isPlanUser;
  }

  get label() {
    return i18n(`plan.${this.plan}.label`);
  }

  get price() {
    return i18n(`plan.${this.plan}.price`);
  }

  get isCurrentPlan() {
    return (
      this.authService.currentTenant.plan === this.plan
    );
  }

  get buttonState() {
    return this.isCurrentPlan
      ? 'manage'
      : this.authService.currentTenant.plan ===
        Plans.values.free
      ? 'payment'
      : 'none';
  }

  get notPlanUserTooltip() {
    return i18n('plan.notPlanUser');
  }

  get plans() {
    return Plans.values;
  }

  doCheckout() {
    return this.planService.doCheckout(this.plan);
  }

  doPortal() {
    return this.planService.doPortal();
  }
}
