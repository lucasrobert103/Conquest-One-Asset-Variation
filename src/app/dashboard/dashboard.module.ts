import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { TableVarianceComponent } from './components/table-variance/table-variance.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent, LineChartComponent, TableVarianceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
})
export class DashboardModule {
}
