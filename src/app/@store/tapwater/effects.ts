import { Injectable } from '@angular/core';
import { TapwaterService } from 'src/app/@core/api/tapwater.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tapwaterActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class TapwaterStoreEffects {

    constructor(private tapwaterService: TapwaterService, private actions$: Actions, private router: Router) {}

    loadTapwaters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(tapwaterActions.GetTapwatersRequestAction.type),
            concatMap(() => this.tapwaterService.getAllTapwaters()),
            map(items => tapwaterActions.GetTapwatersSuccessAction({payload: {items}}))
        )
    );

    addTapwater$ = createEffect( () => this.actions$.pipe(
        ofType(tapwaterActions.AddTapwaterAction),
        concatMap((action) => this.tapwaterService.createTapwater(action.payload)),
        tap(() => console.log('from effect ok! Adding Tapwater') )
      ),
      {dispatch: false}
    );

    deleteTapwater$ = createEffect( () => this.actions$.pipe(
        ofType(tapwaterActions.RemoveTapwaterAction),
        concatMap((action) => this.tapwaterService.deleteTapwater(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Tapwater') )
        ),
     {dispatch: false}
    );

    updateTapwater$ = createEffect( () => this.actions$.pipe(
        ofType(tapwaterActions.UpdateTapwaterAction),
        concatMap((action) => this.tapwaterService.updateTapwater(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Tapwater') )
        ),
        {dispatch: false}
    );


}
