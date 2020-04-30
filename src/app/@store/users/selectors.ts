import { State, userAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectUserState = createFeatureSelector<State>('user');

export const { selectAll, selectIds } = userAdapter.getSelectors();

export const selectAllUsers = createSelector(
    selectUserState,
    selectAll
);

export const areUsersLoaded = createSelector(
    selectUserState,
    state => state.isLoading
);
