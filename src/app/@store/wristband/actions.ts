import { createAction, props } from '@ngrx/store';
import { Wristband } from 'src/app/models/wristband';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_WRISTBAND = '[Wristband] Add Wristband',
    GET_WRISTBANDS_REQUEST = '[Wristband] Get Wristbands Request',
    GET_WRISTBANDS_FAILURE = '[Wristband] Get Wristbands Failure',
    GET_WRISTBANDS_SUCCESS = '[Wristband] Get Wristbands Success',
    REMOVE_WRISTBAND = '[Wristband] Remove Wristband',
    UPDATE_WRISTBAND = '[Wristband] Update Wristband',
}

export const AddWristbandAction = createAction(
    ActionTypes.ADD_WRISTBAND,
    props<{ payload: Wristband }>()
);

export const GetWristbandsRequestAction = createAction(
    ActionTypes.GET_WRISTBANDS_REQUEST
);

export const GetWristbandsFailureAction = createAction(
    ActionTypes.GET_WRISTBANDS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetWristbandsSuccessAction = createAction(
    ActionTypes.GET_WRISTBANDS_SUCCESS,
    props<{ payload: {items: Wristband[]} }>()
);

export const RemoveWristbandAction = createAction(
    ActionTypes.REMOVE_WRISTBAND,
    props<{ payload: {message: string} }>()
);

export const UpdateWristbandAction = createAction(
    ActionTypes.UPDATE_WRISTBAND,
    props<{ payload: Update<Wristband> }>()
);

export const wristbandActions = {
    AddWristbandAction,
    GetWristbandsSuccessAction,
    GetWristbandsFailureAction,
    GetWristbandsRequestAction,
    RemoveWristbandAction,
    UpdateWristbandAction
};
