import { createAction, props } from '@ngrx/store';
import { Tapread } from 'src/app/models/tapread';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_TAPREAD = '[Tapread] Add Tapread',
    GET_TAPREADS_REQUEST = '[Tapread] Get Tapreads Request',
    GET_TAPREADS_FAILURE = '[Tapread] Get Tapreads Failure',
    GET_TAPREADS_SUCCESS = '[Tapread] Get Tapreads Success',
    REMOVE_TAPREAD = '[Tapread] Remove Tapread',
    UPDATE_TAPREAD = '[Tapread] Update Tapread',
}

export const AddTapreadAction = createAction(
    ActionTypes.ADD_TAPREAD,
    props<{ payload: Tapread }>()
);

export const GetTapreadsRequestAction = createAction(
    ActionTypes.GET_TAPREADS_REQUEST
);

export const GetTapreadsFailureAction = createAction(
    ActionTypes.GET_TAPREADS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetTapreadsSuccessAction = createAction(
    ActionTypes.GET_TAPREADS_SUCCESS,
    props<{ payload: {items: Tapread[]} }>()
);

export const RemoveTapreadAction = createAction(
    ActionTypes.REMOVE_TAPREAD,
    props<{ payload: {message: string} }>()
);

export const UpdateTapreadAction = createAction(
    ActionTypes.UPDATE_TAPREAD,
    props<{ payload: Update<Tapread> }>()
);

export const tapreadActions = {
    AddTapreadAction,
    GetTapreadsSuccessAction,
    GetTapreadsFailureAction,
    GetTapreadsRequestAction,
    RemoveTapreadAction,
    UpdateTapreadAction
};
