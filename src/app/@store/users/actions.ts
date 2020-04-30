import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_USER = '[User] Add User',
    GET_USERS_REQUEST = '[User] Get Users Request',
    GET_USERS_FAILURE = '[User] Get Users Failure',
    GET_USERS_SUCCESS = '[User] Get Users Success',
    REMOVE_USER = '[User] Remove User',
    UPDATE_USER = '[User] Update User',
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

export const UpdateUserAction = createAction(
    ActionTypes.UPDATE_USER,
    props<{ payload: Update<User> }>()
);

export const userActions = {
    AddUserAction,
    GetUsersSuccessAction,
    GetUsersFailureAction,
    GetUsersRequestAction,
    RemoveUserAction,
    UpdateUserAction
};
