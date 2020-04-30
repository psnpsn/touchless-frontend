
import { agentAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { agentActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(agentActions.GetAgentsSuccessAction, (state, {payload}) => {
        return agentAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(agentActions.GetAgentsFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(agentActions.GetAgentsRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(agentActions.AddAgentAction, (state, {payload}) => {
        return agentAdapter.addOne(
            payload,
            state
        );
    }),
    on(agentActions.RemoveAgentAction, (state, {payload}) => {
        return agentAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(agentActions.UpdateAgentAction, (state, {payload}) => {
        return agentAdapter.updateOne(
            payload,
            state
        );
    })

);

export function agentReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
