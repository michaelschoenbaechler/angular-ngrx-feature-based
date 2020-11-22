import * as fromRouter from '@ngrx/router-store';
import { Action, createSelector } from '@ngrx/store';
import { RouterReducerState } from "@ngrx/router-store";
import { AppState } from './app.state';

export type State = fromRouter.RouterReducerState<any>;

export const featureSelector = createSelector((state: AppState) => state.router, value => value);
 
export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(featureSelector);
 
export const selectUserId = selectRouteParam("userId");

export function reducer(state: RouterReducerState<any> | undefined, action: Action) {
  return fromRouter.routerReducer(state, action);
}