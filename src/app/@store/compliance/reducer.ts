
import { complianceAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { complianceActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(complianceActions.GetCompliancesSuccessAction, (state, {payload}) => {
        return complianceAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(complianceActions.GetCompliancesFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(complianceActions.GetCompliancesRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(complianceActions.AddComplianceAction, (state, {payload}) => {
        return complianceAdapter.addOne(
            payload,
            state
        );
    }),
    on(complianceActions.RemoveComplianceAction, (state, {payload}) => {
        return complianceAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(complianceActions.UpdateComplianceAction, (state, {payload}) => {
        return complianceAdapter.updateOne(
            payload,
            state
        );
    })

);

export function complianceReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
