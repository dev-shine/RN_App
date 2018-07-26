import * as at from "../actions/actionTypes"
import register from "./auth/register"
import login from "./auth/login"

const initialState = {
  authenticated: false,
  token: null,
  loading: true,
  signup: {
    loading: false,
    error: null,
  },
  login: {
    loading: false,
    error: null,
  },
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case at.CHECK_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case at.CHECK_TOKEN_ERROR:
    // todo
    case at.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        authenticated: action.payload.data !== "invalid",
        loading: false,
      }

    case at.SIGNUP_REQUEST:
    case at.SIGNUP_ERROR:
    case at.SIGNUP_SUCCESS:
      return register(state, action)
    case at.LOGIN_REQUEST:
    case at.LOGIN_ERROR:
    case at.LOGIN_SUCCESS:
      return login(state, action)
    default:
      return state
  }
}