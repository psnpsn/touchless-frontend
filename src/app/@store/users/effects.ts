import { Injectable } from '@angular/core';
import { UserService } from 'src/app/@core/api/user.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { usersActions } from './actions';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class UsersStoreEffects {

    constructor(private userService: UserService, private actions$: Actions, private router: Router) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usersActions.GetUsersRequestAction.type),
            concatMap(() => this.userService.getAllUsers()),
            map(items => usersActions.GetUsersSuccessAction({payload: {items}}))
        )
    );

}
