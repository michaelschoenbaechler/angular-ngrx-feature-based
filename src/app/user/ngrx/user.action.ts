import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const fetchUserList = createAction(
    '[User API] fetch user list',
);

export const setUserList = createAction(
    '[User] set user list',
    props<{users: User[]}>()
);
