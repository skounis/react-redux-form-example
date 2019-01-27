import { authConstants } from '../constants';


const initialState = {
  user: null
};

export default (state = initialState, action) => {
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