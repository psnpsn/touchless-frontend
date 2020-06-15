import { State, tapreadAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectTapreadState = createFeatureSelector<State>('tapread');

export const { selectAll, selectIds } = tapreadAdapter.getSelectors();

export const selectAllTapreads = createSelector(
    selectTapreadState,
    selectAll
);

export const areTapreadsLoaded = createSelector(
    selectTapreadState,
    state => state.isLoading
);
