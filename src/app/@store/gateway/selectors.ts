import { State, gatewayAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectGatewayState = createFeatureSelector<State>('gateway');

export const { selectAll, selectIds } = gatewayAdapter.getSelectors();

export const selectAllGateways = createSelector(
    selectGatewayState,
    selectAll
);

export const areGatewaysLoaded = createSelector(
    selectGatewayState,
    state => state.isLoading
);
