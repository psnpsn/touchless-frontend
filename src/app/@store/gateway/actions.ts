import { createAction, props } from '@ngrx/store';
import { Gateway } from 'src/app/models/gateway';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_GATEWAY = '[Gateway] Add Gateway',
    GET_GATEWAYS_REQUEST = '[Gateway] Get Gateways Request',
    GET_GATEWAYS_FAILURE = '[Gateway] Get Gateways Failure',
    GET_GATEWAYS_SUCCESS = '[Gateway] Get Gateways Success',
    REMOVE_GATEWAY = '[Gateway] Remove Gateway',
    UPDATE_GATEWAY = '[Gateway] Update Gateway',
}

export const AddGatewayAction = createAction(
    ActionTypes.ADD_GATEWAY,
    props<{ payload: Gateway }>()
);

export const GetGatewaysRequestAction = createAction(
    ActionTypes.GET_GATEWAYS_REQUEST
);

export const GetGatewaysFailureAction = createAction(
    ActionTypes.GET_GATEWAYS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetGatewaysSuccessAction = createAction(
    ActionTypes.GET_GATEWAYS_SUCCESS,
    props<{ payload: {items: Gateway[]} }>()
);

export const RemoveGatewayAction = createAction(
    ActionTypes.REMOVE_GATEWAY,
    props<{ payload: {message: string} }>()
);

export const UpdateGatewayAction = createAction(
    ActionTypes.UPDATE_GATEWAY,
    props<{ payload: Update<Gateway> }>()
);

export const gatewayActions = {
    AddGatewayAction,
    GetGatewaysSuccessAction,
    GetGatewaysFailureAction,
    GetGatewaysRequestAction,
    RemoveGatewayAction,
    UpdateGatewayAction
};
