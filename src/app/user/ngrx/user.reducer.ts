import { createEntityAdapter } from '@ngrx/entity';
import { EntityAdapter, EntityState } from '@ngrx/entity/src/models';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from '../models/user.model';
import * as UserAction from './user.action';

export interface State extends EntityState<User> {
    selectedUserId: string,
    loading: boolean
};

export const selectUserId = (u: User) => u.lastName;
export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId
});

// selectors
const {
  selectAll,
  selectEntities,
} = adapter.getSelectors();

export const selectFeature = (state: AppState) => state.user;

export const selectArray = createSelector(
  selectFeature,
  (state) => selectAll(state)
)

export const selectDictionary = createSelector(
  selectFeature,
  (state) => selectEntities(state)
)

// reducer
export const initialState: State = adapter.getInitialState({
    selectedUserId: null,
    loading: false,
});

const userReducer = createReducer(initialState,
    on(UserAction.fetchUser, (state) => {
        return {
          ...state,
          loading: true
        };
    }),
    on(UserAction.setUser, (state, { users }) => {
        return adapter.setAll(users, {
          ...state,
          loading: false
        });
    })
);
 
export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}