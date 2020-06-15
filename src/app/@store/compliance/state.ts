import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Compliance } from 'src/app/models/compliance';

export const complianceAdapter: EntityAdapter<Compliance> = createEntityAdapter<Compliance>({
    selectId: model => model.id
});

export interface State extends EntityState<Compliance> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = complianceAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
