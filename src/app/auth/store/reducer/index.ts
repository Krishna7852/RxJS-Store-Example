import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth';
import * as fromRoot from "../reducer"
export interface AuthState {
  auth: fromAuth.UserState;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuth.reducer,
};

export interface State  {
  auth: AuthState;
}


export const getUserState = createFeatureSelector<fromAuth.UserState>('auth');

export const getUser = createSelector(getUserState, fromAuth.getUser);
export const getError = createSelector(getUserState, fromAuth.getError);
export const getLoginPending = createSelector(getUserState, fromAuth.getPending);
