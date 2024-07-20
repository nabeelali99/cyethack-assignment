import { LOGIN_SUCCESS, LOGOUT } from "../types";
import { setCookie, removeCookie } from "../../services/authService";

const initialState = {
  username: "",
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // Set the cookie
      setCookie(action.payload.username);

      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true,
      };
    case LOGOUT:
      // Remove the cookie
      removeCookie();
      return {
        ...state,
        username: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
