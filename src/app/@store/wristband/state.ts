import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Wristband } from 'src/app/models/wristband';

export const wristbandAdapter: EntityAdapter<Wristband> = createEntityAdapter<Wristband>({
    selectId: model => model.id
});

export interface State extends EntityState<Wristband> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = wristbandAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
