import { State, siteAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectSiteState = createFeatureSelector<State>('site');

export const { selectAll, selectIds } = siteAdapter.getSelectors();

export const selectAllSites = createSelector(
    selectSiteState,
    selectAll
);

export const areSitesLoaded = createSelector(
    selectSiteState,
    state => state.isLoading
);
