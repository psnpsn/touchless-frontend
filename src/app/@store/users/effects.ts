import { Injectable } from '@angular/core';
import { UserService } from 'src/app/@core/api/user.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { userActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class UserStoreEffects {

    constructor(private userService: UserService, private actions$: Actions, private router: Router) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.GetUsersRequestAction.type),
            concatMap(() => this.userService.getAllUsers()),
            map(items => userActions.GetUsersSuccessAction({payload: {items}}))
        )
    );

    addUser$ = createEffect( () => this.actions$.pipe(
        ofType(userActions.AddUserAction),
        concatMap((action) => this.userService.createUser(action.payload)),
        tap(() => console.log('from effect ok! Adding User') )
      ),
      {dispatch: false}
    );

    deleteUser$ = createEffect( () => this.actions$.pipe(
        ofType(userActions.RemoveUserAction),
        concatMap((action) => this.userService.deleteUser(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting User') )
        ),
     {dispatch: false}
    );

    updateUser$ = createEffect( () => this.actions$.pipe(
        ofType(userActions.UpdateUserAction),
        concatMap((action) => this.userService.updateUser(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating User') )
        ),
        {dispatch: false}
    );


}
