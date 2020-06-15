import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';import { HandWashAnalyticsService } from './mock/handwash-analytics.service';
import { HandWashAnalyticsData } from './data/handwashAnalyticsData';
import { MockDataModule } from './mock/mock-data.module';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutService } from './utils/layout.service';
import { ApiModule } from './api/api.module';
import { AuthStoreModule } from '../@store/auth';

const DATA_SERVICES = [
  { provide: HandWashAnalyticsData, useClass: HandWashAnalyticsService },
];

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  LayoutService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule,
    AuthStoreModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    } as ModuleWithProviders;
  }
}
