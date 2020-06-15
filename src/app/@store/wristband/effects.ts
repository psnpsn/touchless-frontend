import { Injectable } from '@angular/core';
import { WristbandService } from 'src/app/@core/api/wristband.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { wristbandActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class WristbandStoreEffects {

    constructor(private wristbandService: WristbandService, private actions$: Actions, private router: Router) {}

    loadWristbands$ = createEffect(() =>
        this.actions$.pipe(
            ofType(wristbandActions.GetWristbandsRequestAction.type),
            concatMap(() => this.wristbandService.getAllWristbands()),
            map(items => wristbandActions.GetWristbandsSuccessAction({payload: {items}}))
        )
    );

    addWristband$ = createEffect( () => this.actions$.pipe(
        ofType(wristbandActions.AddWristbandAction),
        concatMap((action) => this.wristbandService.createWristband(action.payload)),
        tap(() => console.log('from effect ok! Adding Wristband') )
      ),
      {dispatch: false}
    );

    deleteWristband$ = createEffect( () => this.actions$.pipe(
        ofType(wristbandActions.RemoveWristbandAction),
        concatMap((action) => this.wristbandService.deleteWristband(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Wristband') )
        ),
     {dispatch: false}
    );

    updateWristband$ = createEffect( () => this.actions$.pipe(
        ofType(wristbandActions.UpdateWristbandAction),
        concatMap((action) => this.wristbandService.updateWristband(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Wristband') )
        ),
        {dispatch: false}
    );


}
