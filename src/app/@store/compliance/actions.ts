import { createAction, props } from '@ngrx/store';
import { Compliance } from 'src/app/models/compliance';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_COMPLIANCE = '[Compliance] Add Compliance',
    GET_COMPLIANCES_REQUEST = '[Compliance] Get Compliances Request',
    GET_COMPLIANCES_FAILURE = '[Compliance] Get Compliances Failure',
    GET_COMPLIANCES_SUCCESS = '[Compliance] Get Compliances Success',
    REMOVE_COMPLIANCE = '[Compliance] Remove Compliance',
    UPDATE_COMPLIANCE = '[Compliance] Update Compliance',
}

export const AddComplianceAction = createAction(
    ActionTypes.ADD_COMPLIANCE,
    props<{ payload: Compliance }>()
);

export const GetCompliancesRequestAction = createAction(
    ActionTypes.GET_COMPLIANCES_REQUEST
);

export const GetCompliancesFailureAction = createAction(
    ActionTypes.GET_COMPLIANCES_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetCompliancesSuccessAction = createAction(
    ActionTypes.GET_COMPLIANCES_SUCCESS,
    props<{ payload: {items: Compliance[]} }>()
);

export const RemoveComplianceAction = createAction(
    ActionTypes.REMOVE_COMPLIANCE,
    props<{ payload: {message: string} }>()
);

export const UpdateComplianceAction = createAction(
    ActionTypes.UPDATE_COMPLIANCE,
    props<{ payload: Update<Compliance> }>()
);

export const complianceActions = {
    AddComplianceAction,
    GetCompliancesSuccessAction,
    GetCompliancesFailureAction,
    GetCompliancesRequestAction,
    RemoveComplianceAction,
    UpdateComplianceAction
};
