import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PlanRoutingModule,
  routedComponents,
} from 'src/app/plan/plan-routing.module';
import { PlanCardFreeComponent } from 'src/app/plan/plan-card-free.component';
import { PlanCardPaidComponent } from 'src/app/plan/plan-card-paid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PlanCardFreeComponent,
    PlanCardPaidComponent,
  ],
  imports: [SharedModule, PlanRoutingModule, LayoutModule],
  exports: [],
})
export class PlanModule {}
