import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/models/user';

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: model => model.id
});

export interface State extends EntityState<User> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = userAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
