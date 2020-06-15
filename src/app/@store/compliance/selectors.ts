import { State, complianceAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectComplianceState = createFeatureSelector<State>('compliance');

export const { selectAll, selectIds } = complianceAdapter.getSelectors();

export const selectAllCompliances = createSelector(
    selectComplianceState,
    selectAll
);

export const areCompliancesLoaded = createSelector(
    selectComplianceState,
    state => state.isLoading
);
