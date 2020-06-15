import { Injectable } from '@angular/core';
import { TapreadService } from 'src/app/@core/api/tapread.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tapreadActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class TapreadStoreEffects {

    constructor(private tapreadService: TapreadService, private actions$: Actions, private router: Router) {}

    loadTapreads$ = createEffect(() =>
        this.actions$.pipe(
            ofType(tapreadActions.GetTapreadsRequestAction.type),
            concatMap(() => this.tapreadService.getAllTapreads()),
            map(items => tapreadActions.GetTapreadsSuccessAction({payload: {items}}))
        )
    );

    addTapread$ = createEffect( () => this.actions$.pipe(
        ofType(tapreadActions.AddTapreadAction),
        concatMap((action) => this.tapreadService.createTapread(action.payload)),
        tap(() => console.log('from effect ok! Adding Tapread') )
      ),
      {dispatch: false}
    );

    deleteTapread$ = createEffect( () => this.actions$.pipe(
        ofType(tapreadActions.RemoveTapreadAction),
        concatMap((action) => this.tapreadService.deleteTapread(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Tapread') )
        ),
     {dispatch: false}
    );

    updateTapread$ = createEffect( () => this.actions$.pipe(
        ofType(tapreadActions.UpdateTapreadAction),
        concatMap((action) => this.tapreadService.updateTapread(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Tapread') )
        ),
        {dispatch: false}
    );


}
