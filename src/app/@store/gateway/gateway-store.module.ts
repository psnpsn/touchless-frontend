import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gatewayReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { GatewayStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('gateway', gatewayReducer),
    EffectsModule.forFeature([GatewayStoreEffects])
  ],
  providers: [GatewayStoreEffects]
})
export class GatewayStoreModule { }
