import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Gateway } from 'src/app/models/gateway';

export const gatewayAdapter: EntityAdapter<Gateway> = createEntityAdapter<Gateway>({
    selectId: model => model.id
});

export interface State extends EntityState<Gateway> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = gatewayAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
