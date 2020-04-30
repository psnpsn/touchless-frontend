import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Agent } from 'src/app/models/agent';

export const agentAdapter: EntityAdapter<Agent> = createEntityAdapter<Agent>({
    selectId: model => model.id
});

export interface State extends EntityState<Agent> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = agentAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
