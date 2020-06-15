import { Injectable } from '@angular/core';
import { GatewayService } from 'src/app/@core/api/gateway.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { gatewayActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class GatewayStoreEffects {

    constructor(private gatewayService: GatewayService, private actions$: Actions, private router: Router) {}

    loadGateways$ = createEffect(() =>
        this.actions$.pipe(
            ofType(gatewayActions.GetGatewaysRequestAction.type),
            concatMap(() => this.gatewayService.getAllGateways()),
            map(items => gatewayActions.GetGatewaysSuccessAction({payload: {items}}))
        )
    );

    addGateway$ = createEffect( () => this.actions$.pipe(
        ofType(gatewayActions.AddGatewayAction),
        concatMap((action) => this.gatewayService.createGateway(action.payload)),
        tap(() => console.log('from effect ok! Adding Gateway') )
      ),
      {dispatch: false}
    );

    deleteGateway$ = createEffect( () => this.actions$.pipe(
        ofType(gatewayActions.RemoveGatewayAction),
        concatMap((action) => this.gatewayService.deleteGateway(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Gateway') )
        ),
     {dispatch: false}
    );

    updateGateway$ = createEffect( () => this.actions$.pipe(
        ofType(gatewayActions.UpdateGatewayAction),
        concatMap((action) => this.gatewayService.updateGateway(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Gateway') )
        ),
        {dispatch: false}
    );


}
