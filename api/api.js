import axios from "axios"
const api = axios.create({
  baseURL: "http://api-mujtahed.demo.uvix10.com/api2/public/api",
  timeout: 3000,
})

// signup
export const signup = (data) => {
  console.log(data)
  return api.post("/register", data)
}

// getUserPhone
export const getUserPhone = (data) => {
  return api.post("/getUserPhone", data)
}

// getVerificationCode
export const getVerificationCode = (data) => {
  return api.post("/getVerificationCode", data)
}

// sendVerificationCode
export const sendVerificationCode = (data) => {
  return api.post("/sendVerificationCode", data)
}

// login
export const login = (data) => {
  return api.post("/login", data)
}

// logout
export const logout = (data) => {
  return api.post("/logout", data)
}

// checkToken
export const checkToken = (data) => {
  return api.post("/checkToken", data)
}
