import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { wristbandReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { WristbandStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('wristband', wristbandReducer),
    EffectsModule.forFeature([WristbandStoreEffects])
  ],
  providers: [WristbandStoreEffects]
})
export class WristbandStoreModule { }
