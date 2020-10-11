import * as fromUser from './user/ngrx/user.reducer';

export interface AppState {
    user: fromUser.State;
}
