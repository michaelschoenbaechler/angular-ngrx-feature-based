import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const fetchUser = createAction(
    '[User] fetch user',
);

export const setUser = createAction(
    '[User] set user',
    props<{users: User[]}>()
);