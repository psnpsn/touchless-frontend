import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HandwashAnalyticsComponent } from './handwash-analytics/handwash-analytics.component';
import { LegendChartComponent } from './legend-chart/legend-chart.component';
import { HandwashAnalyticsChartComponent } from './handwash-analytics/handwash-analytics-chart/handwash-analytics-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { LayoutModule } from 'src/app/@layout/layout.module';

const COMPONENTS = [
  DashboardComponent,
  HandwashAnalyticsComponent
];

@NgModule({
  declarations: [COMPONENTS, LegendChartComponent, HandwashAnalyticsChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NbCardModule,
    NbIconModule,
    LayoutModule.forRoot(),
  ]
})
export class DashboardModule { }
