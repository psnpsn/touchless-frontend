import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Sensor } from 'src/app/models/sensor';

export const sensorAdapter: EntityAdapter<Sensor> = createEntityAdapter<Sensor>({
    selectId: model => model.id
});

export interface State extends EntityState<Sensor> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = sensorAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
