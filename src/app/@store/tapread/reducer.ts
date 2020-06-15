
import { tapreadAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { tapreadActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(tapreadActions.GetTapreadsSuccessAction, (state, {payload}) => {
        return tapreadAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(tapreadActions.GetTapreadsFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(tapreadActions.GetTapreadsRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(tapreadActions.AddTapreadAction, (state, {payload}) => {
        return tapreadAdapter.addOne(
            payload,
            state
        );
    }),
    on(tapreadActions.RemoveTapreadAction, (state, {payload}) => {
        return tapreadAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(tapreadActions.UpdateTapreadAction, (state, {payload}) => {
        return tapreadAdapter.updateOne(
            payload,
            state
        );
    })

);

export function tapreadReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
