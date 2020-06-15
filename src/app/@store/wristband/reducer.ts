
import { wristbandAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { wristbandActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(wristbandActions.GetWristbandsSuccessAction, (state, {payload}) => {
        return wristbandAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(wristbandActions.GetWristbandsFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(wristbandActions.GetWristbandsRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(wristbandActions.AddWristbandAction, (state, {payload}) => {
        return wristbandAdapter.addOne(
            payload,
            state
        );
    }),
    on(wristbandActions.RemoveWristbandAction, (state, {payload}) => {
        return wristbandAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(wristbandActions.UpdateWristbandAction, (state, {payload}) => {
        return wristbandAdapter.updateOne(
            payload,
            state
        );
    })

);

export function wristbandReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
