import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum ActionTypes {
    ADD_USER = '[User] Add User',
    GET_USERS_REQUEST = '[User] Get Users Request',
    GET_USERS_FAILURE = '[User] Get Users Failure',
    GET_USERS_SUCCESS = '[User] Get Users Success',
    REMOVE_USER = '[User] Remove User',
}

export const AddUserAction = createAction(
    ActionTypes.ADD_USER,
    props<{ payload: User }>()
);

export const GetUsersRequestAction = createAction(
    ActionTypes.GET_USERS_REQUEST
);

export const GetUsersFailureAction = createAction(
    ActionTypes.GET_USERS_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetUsersSuccessAction = createAction(
    ActionTypes.GET_USERS_SUCCESS,
    props<{ payload: {items: User[]} }>()
);

export const RemoveUserAction = createAction(
    ActionTypes.REMOVE_USER,
    props<{ payload: {message: string} }>()
);

export const usersActions = {
    AddUserAction,
    GetUsersSuccessAction,
    GetUsersFailureAction,
    GetUsersRequestAction,
    RemoveUserAction
};
