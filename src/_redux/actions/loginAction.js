import { authConstants } from '../constants';

export const loginSuccessAction = {
  type: authConstants.LOGIN_SUCCESS,
  payload: true
};

export const loginFailureAction = {
  type: authConstants.LOGIN_FAILURE,
  payload: false
};