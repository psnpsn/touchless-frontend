import { State, sensorAdapter } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectSensorState = createFeatureSelector<State>('sensor');

export const { selectAll, selectIds } = sensorAdapter.getSelectors();

export const selectAllSensors = createSelector(
    selectSensorState,
    selectAll
);

export const areSensorsLoaded = createSelector(
    selectSensorState,
    state => state.isLoading
);
