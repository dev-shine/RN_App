import * as ac from "./actionTypes"

// login

export const loginRequest = () => ({
  type: ac.LOGIN_REQUEST,
})

export const loginSuccess = (data) => ({
  type: ac.LOGIN_SUCCESS,
  payload: data,
})

export const loginError = (error) => ({
  type: ac.LOGIN_ERROR,
  payload: error,
})

// signup
export const signupRequest = () => ({
  type: ac.SIGNUP_REQUEST,
})

export const signupSuccess = (data) => ({
  type: ac.SIGNUP_SUCCESS,
  payload: data,
})

export const signupError = (error) => ({
  type: ac.SIGNUP_ERROR,
  payload: error,
})

// getUserPhone
export const getUserPhoneRequest = () => ({
  type: ac.GET_USER_PHONE_REQUEST,
})

export const getUserPhoneSuccess = (data) => ({
  type: ac.GET_USER_PHONE_SUCCESS,
  payload: data,
})

export const getUserPhoneError = (error) => ({
  type: ac.GET_USER_PHONE_ERROR,
  payload: error,
})

// getVerificationCode
export const getVerificationCodeRequest = () => ({
  type: ac.GET_VERIFICATION_CODE_REQUEST,
})

export const getVerificationCodeSuccess = (data) => ({
  type: ac.GET_VERIFICATION_CODE_SUCCESS,
  payload: data,
})

export const getVerificationCodeError = (error) => ({
  type: ac.GET_VERIFICATION_CODE_ERROR,
  payload: error,
})

// sendVerificationCode
export const sendVerificationCodeRequest = () => ({
  type: ac.SEND_VERIFICATION_CODE_REQUEST,
})

export const sendVerificationCodeSuccess = (data) => ({
  type: ac.SEND_VERIFICATION_CODE_SUCCESS,
  payload: data,
})

export const sendVerificationCodeError = (error) => ({
  type: ac.SEND_VERIFICATION_CODE_ERROR,
  payload: error,
})

// logout

export const logoutRequest = () => ({
  type: ac.LOGOUT_REQUEST,
})

export const logoutSuccess = (data) => ({
  type: ac.LOGOUT_SUCCESS,
  payload: data,
})

export const logoutError = (error) => ({
  type: ac.LOGOUT_ERROR,
  payload: error,
})

// checkToken
export const checkTokenRequest = () => ({
  type: ac.CHECK_TOKEN_REQUEST,
})

export const checkTokenSuccess = (data) => ({
  type: ac.CHECK_TOKEN_SUCCESS,
  payload: data,
})

export const checkTokenError = (error) => ({
  type: ac.CHECK_TOKEN_ERROR,
  payload: error,
})
