import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Site } from 'src/app/models/site';

export const siteAdapter: EntityAdapter<Site> = createEntityAdapter<Site>({
    selectId: model => model.id
});

export interface State extends EntityState<Site> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = siteAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
