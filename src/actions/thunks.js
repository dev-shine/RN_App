import * as api from "../../api/api"
import * as actions from "./actions"

// login
export const login = (data) => (dispatch) => {
  const {loginRequest, loginSuccess, loginError} = actions
  dispatch(loginRequest())
  api
    .login(data)
    .then(({data}) => {
      data.status === "error" ?
        dispatch(loginError(data)) :
        dispatch(loginSuccess(data))
    })
    .catch((error) => {
      dispatch(loginError(error))
    })
}

// signup
export const signup = (data) => (dispatch) => {
  const {signupRequest, signupError, signupSuccess} = actions
  dispatch(signupRequest())
  api
    .signup(data)
    .then(({data}) => {
      data.status === "error" ?
        dispatch(signupError(data)) :
        dispatch(signupSuccess(data))
    })
    .catch((error) => {
      dispatch(signupError(error))
    })
}

// getUserPhone
export const getUserPhone = (data) => (dispatch) => {
  const {getUserPhoneRequest, getUserPhoneError, getUserPhoneSuccess} = actions
  dispatch(getUserPhoneRequest())
  api
    .getUserPhone(data)
    .then(({data}) => {
      data.status === "error" ?
        dispatch(getUserPhoneError(data)) :
        dispatch(getUserPhoneSuccess(data))
    })
    .catch((error) => {
      dispatch(getUserPhoneError(error))
    })
}

// sendVerificationCode
export const sendVerificationCode = (data) => (dispatch) => {
  const {sendVerificationCodeRequest, sendVerificationCodeSuccess, sendVerificationCodeError} = actions
  dispatch(sendVerificationCodeRequest())
  api
    .sendUserPhone(data)
    .then(({data}) => {
      data.status === "error" ?
        dispatch(sendVerificationCodeError(error)):
        dispatch(sendVerificationCodeSuccess(data))
    })
    .catch((error) => {
      dispatch(sendVerificationCodeError(error))
    })
}

// getVerificationCode
export const getVerificationCode = (data) => (dispatch) => {
  const {getVerificationCodeRequest, getVerificationCodeSuccess, getVerificationCodeError} = actions
  dispatch(getVerificationCodeRequest())
  api
    .getUserPhone(data)
    .then(({data}) => {
      data.status === "error" ?
      dispatch(getVerificationCodeError(data)) :
      dispatch(getVerificationCodeSuccess(data))
    })
    .catch((error) => {
      dispatch(getVerificationCodeError(error))
    })
}

// logout
export const logout = (data) => (dispatch) => {
  const {logoutError, logoutRequest, logoutSuccess} = actions
  dispatch(logoutRequest())
  api
    .logout(data)
    .then(({data}) => {
      data.status === "error" ?
      dispatch(logoutError(error)):
      dispatch(logoutSuccess(data))
    })
    .catch((error) => {
      dispatch(logoutError(error))
    })
}

// checkToken
export const checkToken = (data) => (dispatch) => {
  const {checkTokenRequest, checkTokenError, checkTokenSuccess} = actions
  dispatch(checkTokenRequest())
  api
    .checkToken(data)
    .then(({data}) => {
      data.status === "error" ?
      dispatch(checkTokenError(data)) :
      dispatch(checkTokenSuccess(data))
    })
    .catch((error) => {
      dispatch(checkTokenError(error))
    })
}
