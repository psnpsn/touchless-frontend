
import { initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { authActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(authActions.AuthLoginAction, (state, {payload}) => {
        console.log('from AuthLoginAction!');
        return {
            ...state,
            isAuthenticated: false,
            error: null
        };
    }),
    on(authActions.AuthLoginSuccessAction, (state, {payload}) => {
        console.log('from AuthLoginAction!');
        return {
            ...state,
            isAuthenticated: true,
            error: null,
            user: payload
        };
    }),
    on(authActions.AuthLoginFailureAction, (state, {payload}) => {
        console.log('from AuthLoginAction!');
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: payload.error
        };
    })

);

export function authReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
