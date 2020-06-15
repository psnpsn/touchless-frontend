import { createAction, props } from '@ngrx/store';
import { Tapwater } from 'src/app/models/tapwater';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_TAPWATER = '[Tapwater] Add Tapwater',
    GET_TAPWATERS_REQUEST = '[Tapwater] Get Tapwaters Request',
    GET_TAPWATERS_FAILURE = '[Tapwater] Get Tapwaters Failure',
    GET_TAPWATERS_SUCCESS = '[Tapwater] Get Tapwaters Success',
    REMOVE_TAPWATER = '[Tapwater] Remove Tapwater',
    UPDATE_TAPWATER = '[Tapwater] Update Tapwater',
}

export const AddTapwaterAction = createAction(
    ActionTypes.ADD_TAPWATER,
    props<{ payload: Tapwater }>()
);

export const GetTapwatersRequestAction = createAction(
    ActionTypes.GET_TAPWATERS_REQUEST
);

export const GetTapwatersFailureAction = createAction(
    ActionTypes.GET_TAPWATERS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetTapwatersSuccessAction = createAction(
    ActionTypes.GET_TAPWATERS_SUCCESS,
    props<{ payload: {items: Tapwater[]} }>()
);

export const RemoveTapwaterAction = createAction(
    ActionTypes.REMOVE_TAPWATER,
    props<{ payload: {message: string} }>()
);

export const UpdateTapwaterAction = createAction(
    ActionTypes.UPDATE_TAPWATER,
    props<{ payload: Update<Tapwater> }>()
);

export const tapwaterActions = {
    AddTapwaterAction,
    GetTapwatersSuccessAction,
    GetTapwatersFailureAction,
    GetTapwatersRequestAction,
    RemoveTapwaterAction,
    UpdateTapwaterAction
};
