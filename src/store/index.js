// redux
import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import {composeWithDevTools} from "redux-devtools-extension"

// tslint:disable:no-var-requires
const reduxModule = require("redux")
reduxModule.__DO_NOT_USE__ActionTypes.INIT = "@@redux/INIT"
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/REPLACE"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
