
import { userAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { userActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(userActions.GetUsersSuccessAction, (state, {payload}) => {
        return userAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(userActions.GetUsersFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(userActions.GetUsersRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(userActions.AddUserAction, (state, {payload}) => {
        return userAdapter.addOne(
            payload,
            state
        );
    }),
    on(userActions.RemoveUserAction, (state, {payload}) => {
        return userAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(userActions.UpdateUserAction, (state, {payload}) => {
        return userAdapter.updateOne(
            payload,
            state
        );
    })

);

export function userReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
