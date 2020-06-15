import { Injectable } from '@angular/core';
import { SiteService } from 'src/app/@core/api/site.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { siteActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class SiteStoreEffects {

    constructor(private siteService: SiteService, private actions$: Actions, private router: Router) {}

    loadSites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(siteActions.GetSitesRequestAction.type),
            concatMap(() => this.siteService.getAllSites()),
            map(items => siteActions.GetSitesSuccessAction({payload: {items}}))
        )
    );

    addSite$ = createEffect( () => this.actions$.pipe(
        ofType(siteActions.AddSiteAction),
        concatMap((action) => this.siteService.createSite(action.payload)),
        tap(() => console.log('from effect ok! Adding Site') )
      ),
      {dispatch: false}
    );

    deleteSite$ = createEffect( () => this.actions$.pipe(
        ofType(siteActions.RemoveSiteAction),
        concatMap((action) => this.siteService.deleteSite(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Site') )
        ),
     {dispatch: false}
    );

    updateSite$ = createEffect( () => this.actions$.pipe(
        ofType(siteActions.UpdateSiteAction),
        concatMap((action) => this.siteService.updateSite(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Site') )
        ),
        {dispatch: false}
    );


}
