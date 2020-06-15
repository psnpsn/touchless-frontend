import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HandwashAnalyticsComponent } from './handwash-analytics/handwash-analytics.component';
import { LegendChartComponent } from './legend-chart/legend-chart.component';
import { HandwashAnalyticsChartComponent } from './handwash-analytics/handwash-analytics-chart/handwash-analytics-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { LayoutModule } from 'src/app/@layout/layout.module';
import { ComplianceAdvancedPieComponent } from './compliance-advanced-pie/compliance-advanced-pie.component';

const COMPONENTS = [
  DashboardComponent,
  HandwashAnalyticsComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    LegendChartComponent,
    HandwashAnalyticsChartComponent,
    ComplianceAdvancedPieComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NbCardModule,
    NbIconModule,
    LayoutModule.forRoot(),
    NgxChartsModule,
  ]
})
export class DashboardModule { }
