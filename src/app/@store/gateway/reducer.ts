
import { gatewayAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { gatewayActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(gatewayActions.GetGatewaysSuccessAction, (state, {payload}) => {
        return gatewayAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(gatewayActions.GetGatewaysFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(gatewayActions.GetGatewaysRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(gatewayActions.AddGatewayAction, (state, {payload}) => {
        return gatewayAdapter.addOne(
            payload,
            state
        );
    }),
    on(gatewayActions.RemoveGatewayAction, (state, {payload}) => {
        return gatewayAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(gatewayActions.UpdateGatewayAction, (state, {payload}) => {
        return gatewayAdapter.updateOne(
            payload,
            state
        );
    })

);

export function gatewayReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
