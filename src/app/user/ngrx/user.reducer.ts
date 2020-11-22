import { createEntityAdapter } from '@ngrx/entity';
import { EntityAdapter, EntityState } from '@ngrx/entity/src/models';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from '../models/user.model';
import * as UserAction from './user.action';

export interface State extends EntityState<User> {
    loading: boolean;
}

export const selectUserId = (u: User) => u.id;
export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId
});

// selectors
const {
  selectAll,
  selectEntities,
} = adapter.getSelectors();

export const selectFeature = (state: AppState) => state.user;

export const selectList = createSelector(
  selectFeature,
  (state) => selectAll(state)
);

export const selectById = createSelector(
  selectFeature,
  (state, { userId }) => selectAll(state).find(u => u.id === userId)
);

export const selectDictionary = createSelector(
  selectFeature,
  (state) => selectEntities(state)
);

// reducer
export const initialState: EntityState<User> & { loading: boolean } = adapter.getInitialState({
    loading: false,
});

const userReducer = createReducer(initialState,
  on(UserAction.fetchUserList, (state) => {
      return {
        ...state,
        loading: true
      };
  }),
  on(UserAction.setUserList, (state, { users }) => {
      return adapter.setAll(users, {
        ...state,
        loading: false
      });
  }),
);

export function reducer(state: State | undefined, action: Action): any {
  return userReducer(state, action);
}
