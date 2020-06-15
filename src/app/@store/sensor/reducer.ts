
import { sensorAdapter, initialState, State } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import { sensorActions } from './actions';

const _reducer = createReducer(
    initialState,
    on(sensorActions.GetSensorsSuccessAction, (state, {payload}) => {
        return sensorAdapter.setAll(
            payload.items,
            {...state, isLoading: false, error: null}
        );
    }),
    on(sensorActions.GetSensorsFailureAction, (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.error
        };
    }),
    on(sensorActions.GetSensorsRequestAction, state => {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }),
    on(sensorActions.AddSensorAction, (state, {payload}) => {
        return sensorAdapter.addOne(
            payload,
            state
        );
    }),
    on(sensorActions.RemoveSensorAction, (state, {payload}) => {
        return sensorAdapter.removeOne(
            payload.message,
            state
        );
    }),
    on(sensorActions.UpdateSensorAction, (state, {payload}) => {
        return sensorAdapter.updateOne(
            payload,
            state
        );
    })

);

export function sensorReducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
