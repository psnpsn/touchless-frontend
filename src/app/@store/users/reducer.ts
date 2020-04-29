
import { usersAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { ActionTypes, usersActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(usersActions.GetUsersSuccessAction, (state, {payload}) => {
        return usersAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(usersActions.GetUsersFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(usersActions.GetUsersRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(usersActions.AddUserAction, (state, {payload}) => {
        return usersAdapter.addOne(
            payload,
            state
        );
    }),
    on(usersActions.RemoveUserAction, (state, {payload}) => {
        return usersAdapter.removeOne(
            payload.message,
            state
        );
    })

);

export function usersReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
