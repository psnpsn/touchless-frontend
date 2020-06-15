import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tapread } from 'src/app/models/tapread';

export const tapreadAdapter: EntityAdapter<Tapread> = createEntityAdapter<Tapread>({
    selectId: model => model.id
});

export interface State extends EntityState<Tapread> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = tapreadAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
