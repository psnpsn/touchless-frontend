import { State } from './state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const getError = (state: State): any => state.error;

export const getUserProfile = (state: State): any => state.userProfile;

export const getIsAuthenticated = (state: State): boolean => state.isAuthenticated;

export const selectAuthState: MemoizedSelector<object, any> =
    createFeatureSelector<State>('auth');

export const selectAuthIsAuthenticated: MemoizedSelector<object, boolean> =
    createSelector(
        selectAuthState,
        getIsAuthenticated
    );

export const selectAuthError: MemoizedSelector<object, any> =
    createSelector(
        selectAuthState,
        getError
    );

export const selectAuthUserProfile: MemoizedSelector<object, User> =
    createSelector(
        selectAuthState,
        getUserProfile
    );


