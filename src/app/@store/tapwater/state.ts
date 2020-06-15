import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Tapwater } from 'src/app/models/tapwater';

export const tapwaterAdapter: EntityAdapter<Tapwater> = createEntityAdapter<Tapwater>({
    selectId: model => model.id
});

export interface State extends EntityState<Tapwater> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = tapwaterAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
