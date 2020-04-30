import { createAction, props } from '@ngrx/store';
import { Agent } from 'src/app/models/agent';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_AGENT = '[Agent] Add Agent',
    GET_AGENTS_REQUEST = '[Agent] Get Agents Request',
    GET_AGENTS_FAILURE = '[Agent] Get Agents Failure',
    GET_AGENTS_SUCCESS = '[Agent] Get Agents Success',
    REMOVE_AGENT = '[Agent] Remove Agent',
    UPDATE_AGENT = '[Agent] Update Agent',
}

export const AddAgentAction = createAction(
    ActionTypes.ADD_AGENT,
    props<{ payload: Agent }>()
);

export const GetAgentsRequestAction = createAction(
    ActionTypes.GET_AGENTS_REQUEST
);

export const GetAgentsFailureAction = createAction(
    ActionTypes.GET_AGENTS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetAgentsSuccessAction = createAction(
    ActionTypes.GET_AGENTS_SUCCESS,
    props<{ payload: {items: Agent[]} }>()
);

export const RemoveAgentAction = createAction(
    ActionTypes.REMOVE_AGENT,
    props<{ payload: {message: string} }>()
);

export const UpdateAgentAction = createAction(
    ActionTypes.UPDATE_AGENT,
    props<{ payload: Update<Agent> }>()
);

export const agentActions = {
    AddAgentAction,
    GetAgentsSuccessAction,
    GetAgentsFailureAction,
    GetAgentsRequestAction,
    RemoveAgentAction,
    UpdateAgentAction
};
