import { State, usersAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectUsersState = createFeatureSelector<State>('user');

export const { selectAll, selectIds } = usersAdapter.getSelectors();

export const selectAllUsers = createSelector(
    selectUsersState,
    selectAll
);

export const areUsersLoaded = createSelector(
    selectUsersState,
    state => state.isLoading
);
