import { createStore } from "redux";
import authReducer from "./reducers/authReducer";

function configureStore(state = { isLoggedIn: false }) {
  return createStore(authReducer, state);
}

export default configureStore;
