import { Injectable } from '@angular/core';
import { ComplianceService } from 'src/app/@core/api/compliance.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { complianceActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ComplianceStoreEffects {

    constructor(private complianceService: ComplianceService, private actions$: Actions, private router: Router) {}

    loadCompliances$ = createEffect(() =>
        this.actions$.pipe(
            ofType(complianceActions.GetCompliancesRequestAction.type),
            concatMap(() => this.complianceService.getAllCompliances()),
            map(items => complianceActions.GetCompliancesSuccessAction({payload: {items}}))
        )
    );

    addCompliance$ = createEffect( () => this.actions$.pipe(
        ofType(complianceActions.AddComplianceAction),
        concatMap((action) => this.complianceService.createCompliance(action.payload)),
        tap(() => console.log('from effect ok! Adding Compliance') )
      ),
      {dispatch: false}
    );

    deleteCompliance$ = createEffect( () => this.actions$.pipe(
        ofType(complianceActions.RemoveComplianceAction),
        concatMap((action) => this.complianceService.deleteCompliance(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Compliance') )
        ),
     {dispatch: false}
    );

    updateCompliance$ = createEffect( () => this.actions$.pipe(
        ofType(complianceActions.UpdateComplianceAction),
        concatMap((action) => this.complianceService.updateCompliance(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Compliance') )
        ),
        {dispatch: false}
    );


}
