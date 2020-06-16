import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logging out',
}

export const AuthLoginAction = createAction(
    ActionTypes.LOGIN,
    props<{ payload: any }>()
);

export const AuthLoginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ payload: any }>()
);

export const AuthLoginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ payload: any }>()
);

export const AuthLogoutAction = createAction(
    ActionTypes.LOGIN_FAILURE
);

export const authActions = {
    AuthLoginAction,
    AuthLoginSuccessAction,
    AuthLoginFailureAction,
    AuthLogoutAction
};
