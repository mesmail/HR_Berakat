import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  DashboardRoutingModule,
  routedComponents,
} from 'src/app/dashboard/dashboard-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardChartComponent } from 'src/app/dashboard/charts/dashboard-chart.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardChartComponent,
    ...routedComponents,
  ],
  providers: [],
})
export class DashboardModule {}
