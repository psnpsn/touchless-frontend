import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sensorReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { SensorStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('sensor', sensorReducer),
    EffectsModule.forFeature([SensorStoreEffects])
  ],
  providers: [SensorStoreEffects]
})
export class SensorStoreModule { }
