
import { siteAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { siteActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(siteActions.GetSitesSuccessAction, (state, {payload}) => {
        return siteAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(siteActions.GetSitesFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(siteActions.GetSitesRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(siteActions.AddSiteAction, (state, {payload}) => {
        return siteAdapter.addOne(
            payload,
            state
        );
    }),
    on(siteActions.RemoveSiteAction, (state, {payload}) => {
        return siteAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(siteActions.UpdateSiteAction, (state, {payload}) => {
        return siteAdapter.updateOne(
            payload,
            state
        );
    })

);

export function siteReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
