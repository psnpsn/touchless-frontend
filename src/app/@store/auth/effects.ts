import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { authActions, AuthLoginSuccessAction, AuthLoginFailureAction, AuthLogoutAction } from './actions';
import { concatMap, map, tap, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/api/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthStoreEffects {

    constructor(private authService: AuthService, private actions$: Actions, private router: Router) {}


    authUser$ = createEffect( () => this.actions$.pipe(
        ofType(authActions.AuthLoginAction),
        switchMap((action) => {
          console.log('from effect authUser$ ! Autheticating user success');
          return this.authService.obtainAccessToken(action.payload);
        }),
        switchMap( data => [authActions.AuthLoginSuccessAction({payload: data})]),
        catchError( error => {
          console.log('from effect authUser$ ! Error triggered !');
          return of(authActions.AuthLoginFailureAction({payload: error}));
          }
        )
      )
    );

    authUserSuccess$ = createEffect(() =>
      this.actions$.pipe(
          ofType(AuthLoginSuccessAction),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap((jsonResp) => {
            console.log(jsonResp);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('access_token', jsonResp.payload.access_token);
            localStorage.setItem('refresh_token', jsonResp.payload.refresh_token);
            localStorage.setItem('expires_in', jsonResp.payload.expires_in);
            localStorage.setItem('scope', jsonResp.payload.scope);
            this.router.navigate(['/map']);
          })
      ),
      { dispatch: false }
    );

    authUserFailure$ = createEffect(() =>
      this.actions$.pipe(
          ofType(AuthLoginFailureAction),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap((jsonResp) => {
            console.log(jsonResp);
          })
      ),
      { dispatch: false }
    );

    authUserLogout$ = createEffect(() =>
      this.actions$.pipe(
          ofType(AuthLogoutAction),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap(() => {
            console.log('Logging out...');
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('scope');
            this.router.navigate(['/auth/login']);
          })
      ),
      { dispatch: false }
    );

}
