import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/models/user';

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: model => model.id
});

export interface State extends EntityState<User> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = usersAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
