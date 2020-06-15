import { User } from 'src/app/models/user';

export interface State {
    userProfile: User;
    isAuthenticated?: boolean;
    error?: any;
}

export const initialState: State = (
    {
        isAuthenticated: false,
        userProfile: null,
        error: null
    }
);
