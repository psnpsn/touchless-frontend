import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { tapwaterReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TapwaterStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tapwater', tapwaterReducer),
    EffectsModule.forFeature([TapwaterStoreEffects])
  ],
  providers: [TapwaterStoreEffects]
})
export class TapwaterStoreModule { }
