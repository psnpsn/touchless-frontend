
import { tapwaterAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { tapwaterActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(tapwaterActions.GetTapwatersSuccessAction, (state, {payload}) => {
        return tapwaterAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(tapwaterActions.GetTapwatersFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(tapwaterActions.GetTapwatersRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(tapwaterActions.AddTapwaterAction, (state, {payload}) => {
        return tapwaterAdapter.addOne(
            payload,
            state
        );
    }),
    on(tapwaterActions.RemoveTapwaterAction, (state, {payload}) => {
        return tapwaterAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(tapwaterActions.UpdateTapwaterAction, (state, {payload}) => {
        return tapwaterAdapter.updateOne(
            payload,
            state
        );
    })

);

export function tapwaterReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
