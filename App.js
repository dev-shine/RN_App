import React from "react"
import {StyleSheet, StatusBar, AsyncStorage} from "react-native"
import {createSwitchNavigator, createStackNavigator} from "react-navigation"

// screens
import Loading from "./src/screens/Loading/Loading"
import Register from "./src/screens/Register/Register"
import Login from "./src/screens/Login/Login"
import ResetPassword from "./src/screens/ResetPassword/ResetPassword"
import VerifyPhone from "./src/screens/VerifyPhone/VerifyPhone"
import Home from "./src/screens/Home/Home"
import Modal from "./src/screens/Modal/Modal"

// redux
import {Provider, connect} from "react-redux"
import {store} from "./src/store"

const MainStack = createStackNavigator(
  {
    VerifyPhone,
    Register,
    ResetPassword,
    Login,
    Home,
  },
  {
    initialRouteName: "Home",
  },
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: Modal,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  },
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <StatusBar barStyle="light-content" />
          <RootStack />
        </React.Fragment>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
