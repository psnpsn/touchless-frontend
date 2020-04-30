import { Injectable } from '@angular/core';
import { AgentService } from 'src/app/@core/api/agent.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { agentActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class AgentStoreEffects {

    constructor(private agentService: AgentService, private actions$: Actions, private router: Router) {}

    loadAgents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(agentActions.GetAgentsRequestAction.type),
            concatMap(() => this.agentService.getAllAgents()),
            map(items => agentActions.GetAgentsSuccessAction({payload: {items}}))
        )
    );

    addAgent$ = createEffect( () => this.actions$.pipe(
        ofType(agentActions.AddAgentAction),
        concatMap((action) => this.agentService.createAgent(action.payload)),
        tap(() => console.log('from effect ok! Adding Agent') )
      ),
      {dispatch: false}
    );

    deleteAgent$ = createEffect( () => this.actions$.pipe(
        ofType(agentActions.RemoveAgentAction),
        concatMap((action) => this.agentService.deleteAgent(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Agent') )
        ),
     {dispatch: false}
    );

    updateAgent$ = createEffect( () => this.actions$.pipe(
        ofType(agentActions.UpdateAgentAction),
        concatMap((action) => this.agentService.updateAgent(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Agent') )
        ),
        {dispatch: false}
    );


}
