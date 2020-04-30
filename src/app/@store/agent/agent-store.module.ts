import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { agentReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AgentStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('agent', agentReducer),
    EffectsModule.forFeature([AgentStoreEffects])
  ],
  providers: [AgentStoreEffects]
})
export class AgentStoreModule { }
