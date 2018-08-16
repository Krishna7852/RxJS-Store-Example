import { User } from '../../models/user';
import { AuthActions, AuthActionTypes } from '../actions/auth';

export interface UserState {
  loggedIn: boolean;
  user: User | null;
  error: string | null;
  pending: boolean
}

export const initialState: UserState = {
  loggedIn: false,
  user: null,
  error: '',
  pending: false
};

export function reducer(state=initialState, action: AuthActions): UserState {
  switch (action.type) {
    case AuthActionTypes.Login: {
    return {
      ...state,
      error: null,
      pending: true
    }
    }

    case AuthActionTypes.LoginSuccess : {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        error: null,
        pending: false
      };
    }
    case AuthActionTypes.Logout: {
      return initialState
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        user: null,
        error: action.payload,
        pending: false
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: UserState) => state.loggedIn;
export const getUser = (state: UserState) => state.user;
export const getError =(state: UserState) => state.error;
export const getPending = (state: UserState) => state.pending;
