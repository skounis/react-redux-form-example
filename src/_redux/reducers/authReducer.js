import { authConstants } from '../constants';

export default (state, action) => {
    switch (action.type) {
      case authConstants.LOGIN_FAILURE:
      case authConstants.LOGIN_SUCCESS:
      case authConstants.LOGOUT:
        return {
          user: action.payload
        };
      default:
        return state;
    }
  };