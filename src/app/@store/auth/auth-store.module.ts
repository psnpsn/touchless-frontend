import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  providers: [AuthStoreEffects]
})
export class AuthStoreModule { }
