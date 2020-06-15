import { State, tapwaterAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectTapwaterState = createFeatureSelector<State>('tapwater');

export const { selectAll, selectIds } = tapwaterAdapter.getSelectors();

export const selectAllTapwaters = createSelector(
    selectTapwaterState,
    selectAll
);

export const areTapwatersLoaded = createSelector(
    selectTapwaterState,
    state => state.isLoading
);
