import { State, agentAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectAgentState = createFeatureSelector<State>('agent');

export const { selectAll, selectIds } = agentAdapter.getSelectors();

export const selectAllAgents = createSelector(
    selectAgentState,
    selectAll
);

export const areAgentsLoaded = createSelector(
    selectAgentState,
    state => state.isLoading
);
