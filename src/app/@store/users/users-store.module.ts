import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducer';
import { UsersStoreEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', usersReducer),
    EffectsModule.forFeature([UsersStoreEffects])
  ],
  providers: [UsersStoreEffects]
})
export class UsersStoreModule { }
