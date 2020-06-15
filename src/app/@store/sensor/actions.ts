import { createAction, props } from '@ngrx/store';
import { Sensor } from 'src/app/models/sensor';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_SENSOR = '[Sensor] Add Sensor',
    GET_SENSORS_REQUEST = '[Sensor] Get Sensors Request',
    GET_SENSORS_FAILURE = '[Sensor] Get Sensors Failure',
    GET_SENSORS_SUCCESS = '[Sensor] Get Sensors Success',
    REMOVE_SENSOR = '[Sensor] Remove Sensor',
    UPDATE_SENSOR = '[Sensor] Update Sensor',
}

export const AddSensorAction = createAction(
    ActionTypes.ADD_SENSOR,
    props<{ payload: Sensor }>()
);

export const GetSensorsRequestAction = createAction(
    ActionTypes.GET_SENSORS_REQUEST
);

export const GetSensorsFailureAction = createAction(
    ActionTypes.GET_SENSORS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetSensorsSuccessAction = createAction(
    ActionTypes.GET_SENSORS_SUCCESS,
    props<{ payload: {items: Sensor[]} }>()
);

export const RemoveSensorAction = createAction(
    ActionTypes.REMOVE_SENSOR,
    props<{ payload: {message: string} }>()
);

export const UpdateSensorAction = createAction(
    ActionTypes.UPDATE_SENSOR,
    props<{ payload: Update<Sensor> }>()
);

export const sensorActions = {
    AddSensorAction,
    GetSensorsSuccessAction,
    GetSensorsFailureAction,
    GetSensorsRequestAction,
    RemoveSensorAction,
    UpdateSensorAction
};
