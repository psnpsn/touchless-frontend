import { State, wristbandAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectWristbandState = createFeatureSelector<State>('wristband');

export const { selectAll, selectIds } = wristbandAdapter.getSelectors();

export const selectAllWristbands = createSelector(
    selectWristbandState,
    selectAll
);

export const areWristbandsLoaded = createSelector(
    selectWristbandState,
    state => state.isLoading
);
