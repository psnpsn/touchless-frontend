import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum ActionTypes {
    ADD_USER = '[User] Add User',
    GET_USERS_REQUEST = '[User] Get Users Request',
    GET_USERS_FAILURE = '[User] Get Users Failure',
    GET_USERS_SUCCESS = '[User] Get Users Success',
    REMOVE_USER = '[User] Remove User',
}

export class AddUserAction implements Action {
    readonly type = ActionTypes.ADD_USER;

    constructor(public payload: User) {}
}

export class GetUsersRequestAction implements Action {
    readonly type = ActionTypes.GET_USERS_REQUEST;
}

export class GetUsersFailureAction implements Action {
    readonly type = ActionTypes.GET_USERS_FAILURE;

    constructor(public payload: {error: string}) {}
}

export class GetUsersSuccessAction implements Action {
    readonly type = ActionTypes.GET_USERS_SUCCESS;

    constructor(public payload: {items: User[]}) {}
}

export class RemoveUserAction implements Action {
    readonly type = ActionTypes.REMOVE_USER;

    constructor(public payload: User) {}
}

export type Actions = AddUserAction | GetUsersFailureAction | GetUsersRequestAction | GetUsersSuccessAction | RemoveUserAction;

