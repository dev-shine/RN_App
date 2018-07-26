import at from "../../actions/actionTypes"
import EE from "../../utils/EventEmitter"

export default  (state, action = {}) => {
  switch (action.type) {
    case at.SIGNUP_REQUEST:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true,
          error: null,
        },
      }
    case at.SIGNUP_ERROR:
      console.log(action.payload)
      setTimeout(() => {
        EE.emit("NAVIGATE/MODAL", action.payload)
      }, 0)
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: action.payload,
        },
      }
    case at.SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: null,
        },
      }
    default:
      console.log("here", action)
      return state
  }
}