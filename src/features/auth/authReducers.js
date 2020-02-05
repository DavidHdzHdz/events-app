import { AUTH_SIGN_UP, AUTH_LOGIN, AUTH_LOGOUT } from "./authActionsTypes";
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = {
  isAuthenticated: false,
  user: ''
}

const authLogin = (state, { email }) => ({ ...state, isAuthenticated: true, user: email });
const authSingUp = (state, { email }) => ({ ...state, isAuthenticated: true, user: email });
const authLogOut = (state) => ({ ...state, ...initialState });

export default createReducer(initialState, {
  [AUTH_SIGN_UP]: authSingUp,
  [AUTH_LOGIN]: authLogin,
  [AUTH_LOGOUT]: authLogOut
});