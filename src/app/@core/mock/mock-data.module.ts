import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandWashAnalyticsService } from './handwash-analytics.service';
import { PeriodsService } from './periods.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    HandWashAnalyticsService,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MockDataModule,
      providers: [
        HandWashAnalyticsService,
        PeriodsService,
      ],
    } as ModuleWithProviders;
  }
}
