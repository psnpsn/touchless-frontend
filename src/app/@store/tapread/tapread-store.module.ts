import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { tapreadReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TapreadStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tapread', tapreadReducer),
    EffectsModule.forFeature([TapreadStoreEffects])
  ],
  providers: [TapreadStoreEffects]
})
export class TapreadStoreModule { }
