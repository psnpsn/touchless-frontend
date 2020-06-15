import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { siteReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { SiteStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('site', siteReducer),
    EffectsModule.forFeature([SiteStoreEffects])
  ],
  providers: [SiteStoreEffects]
})
export class SiteStoreModule { }
