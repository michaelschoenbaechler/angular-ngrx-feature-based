import * as fromUser from './user/ngrx/user.reducer';
import * as fromRouter from './app-router.reducer';

export interface AppState {
    router: fromRouter.State;
    user: fromUser.State;
    // todo: fromTodo.State
}
