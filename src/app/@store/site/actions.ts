import { createAction, props } from '@ngrx/store';
import { Site } from 'src/app/models/site';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
    ADD_SITE = '[Site] Add Site',
    GET_SITES_REQUEST = '[Site] Get Sites Request',
    GET_SITES_FAILURE = '[Site] Get Sites Failure',
    GET_SITES_SUCCESS = '[Site] Get Sites Success',
    REMOVE_SITE = '[Site] Remove Site',
    UPDATE_SITE = '[Site] Update Site',
}

export const AddSiteAction = createAction(
    ActionTypes.ADD_SITE,
    props<{ payload: Site }>()
);

export const GetSitesRequestAction = createAction(
    ActionTypes.GET_SITES_REQUEST
);

export const GetSitesFailureAction = createAction(
    ActionTypes.GET_SITES_FAILURE,
    props<{ payload: {error: string} }>()
);

export const GetSitesSuccessAction = createAction(
    ActionTypes.GET_SITES_SUCCESS,
    props<{ payload: {items: Site[]} }>()
);

export const RemoveSiteAction = createAction(
    ActionTypes.REMOVE_SITE,
    props<{ payload: {message: string} }>()
);

export const UpdateSiteAction = createAction(
    ActionTypes.UPDATE_SITE,
    props<{ payload: Update<Site> }>()
);

export const siteActions = {
    AddSiteAction,
    GetSitesSuccessAction,
    GetSitesFailureAction,
    GetSitesRequestAction,
    RemoveSiteAction,
    UpdateSiteAction
};
