import { Component } from '@angular/core';
import { i18n } from 'src/i18n';
import { Plans } from 'src/security/plans';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  constructor() {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('plan.title')],
  ];

  get plans() {
    return Plans.values;
  }
}
