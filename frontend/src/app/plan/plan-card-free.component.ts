import { Component } from '@angular/core';
import { i18n } from 'src/i18n';
import { Plans } from 'src/security/plans';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-plan-card-free',
  templateUrl: './plan-card-free.component.html',
})
export class PlanCardFreeComponent {
  constructor(private authService: AuthService) {}

  get label() {
    return i18n(`plan.${Plans.values.free}.label`);
  }

  get price() {
    return i18n(`plan.free.price`);
  }

  get isCurrentPlan() {
    return (
      this.authService.currentTenant.plan ===
      Plans.values.free
    );
  }

  get plans() {
    return Plans.values;
  }
}
